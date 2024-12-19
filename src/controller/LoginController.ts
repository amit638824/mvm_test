import jwt from "jsonwebtoken";
import { Login } from "../Entities/login";
import { sendEmail } from "../helpers/email";
import { MESSAGES } from "../helpers/constants";
import { createResponse } from "../helpers/response";
import { User } from "../Entities/user";
import upload from "../middleware/multer";

export const LoginController = async (req: any, res: any) => {
    try {
        const { email, password } = req.body;

        // Find the login entry based on email and select the userId only  otimized query load test
        const login = await Login.findOne({
            where: { emailId: email },
            select: ["userId", "password"]
        });

        // Check if login entry exists
        if (!login) {
            return createResponse(res, 404, MESSAGES?.USER_NOT_FOUND, [], false, true);
        }

        // Find the associated user by userId and fetch only required fields
        const user = await User.findOne({
            where: { userId: login.userId },
            select: ["id", "userId", "name", "emailId", "phoneNumber", "profile", "address"],
        });

        // Check if user exists
        if (!user) {
            return createResponse(res, 404, MESSAGES?.USER_NOT_FOUND, [], false, true);
        }

        // Compare password with stored value (assuming plaintext password comparison here)
        if (login.password !== password) {
            return createResponse(res, 401, MESSAGES?.INVALID_CREDENTIALS, [], false, true);
        }

        // Create JWT token
        const JWT_SECRET: any = process.env.JWT_SECRET;
        const token = jwt.sign({ id: user.userId, email: user.emailId }, JWT_SECRET, {
            expiresIn: "24h",
        });

        // Send response with only the necessary data and token
        return createResponse(res, 200, MESSAGES?.LOGIN_SUCCESS, {
            memberId: user?.userId,
            id: user?.id,
            name: user?.name,
            email: user?.emailId,
            phoneNumber: user?.phoneNumber,
            profile: user?.profile,
            address: user?.address,
            token,
        });

    } catch (error) {
        // tslint:disable-next-line:no-console
        console.error(MESSAGES?.INTERNAL_SERVER_ERROR, error);

        return createResponse(res, 500, MESSAGES?.INTERNAL_SERVER_ERROR, [], false, true);
    }
};
export const ForgetPassword = async (req: any, res: any, next: any) => {
    const { email } = req.body;
    try {
        const user = await Login.findOne({ where: { emailId: email } });
        if (user) {
            const JWT_SECRET: any = process.env.JWT_SECRET;
            const token = jwt.sign({ email: email }, JWT_SECRET, { expiresIn: "40h" });

            await Login.update({ emailId: email }, { loginToken: token, updatedAt: new Date() });
            await sendEmail(email, "Reset Password", "", `${process.env.UI_BASE_URL}/resetpassword/${token}`);

            return createResponse(res, 200, MESSAGES?.RESET_LINK_SENT);
        } else {
            return createResponse(res, 404, MESSAGES?.USER_NOT_FOUND, [], false, true);
        }
    } catch (err) {
        // tslint:disable-next-line:no-console
        console.error(MESSAGES?.RESET_LINK_ERROR, err);

        return createResponse(res, 500, MESSAGES?.RESET_LINK_ERROR, [], false, true);
    }
};
export const ResetPassword = async (req: any, res: any, next: any) => {
    const { password, token } = req.body;

    try {
        const user = await Login.findOne({ where: { loginToken: token } });

        if (user) {
            const tokenIssuedAt = new Date(user.updatedAt).getTime(); // Token issued timestamp
            const currentTime = Date.now(); // Current timestamp
            const tokenExpiryTime = 300000; // 5 minutes in milliseconds

            if ((currentTime - tokenIssuedAt) <= tokenExpiryTime) {
                await Login.update({ loginToken: token }, { loginToken: "", password: password });

                return createResponse(res, 200, MESSAGES?.PASSWORD_UPDATED);
            } else {
                await Login.update({ loginToken: token }, { loginToken: "" });

                return createResponse(res, 401, MESSAGES?.TOKEN_EXPIRED, [], false, true);
            }
        } else {
            return createResponse(res, 404, MESSAGES?.INVALID_TOKEN, [], false, true);
        }
    } catch (err) {
        // tslint:disable-next-line:no-console
        console.error(MESSAGES?.RESET_ERROR, err);

        return createResponse(res, 500, MESSAGES?.RESET_ERROR, [], false, true);
    }
};
export const userProfileUpdate = async (req: any, res: any) => {
    try {
        // Handle file upload using multer
        await new Promise<void>((resolve, reject) => {
            upload.single("profile")(req, res, (err: any) => {
                if (err) {
                    return reject(createResponse(res, 400, MESSAGES?.NO_FILE_UPLOAD, [], false, true));
                } 
                resolve();
            });
        });

        const { userId, name, address, phoneNumber, password } = req.body; 
        
        // Validate required fields
        if (!userId) {
            return createResponse(res, 400, "User ID is required", [], false, true);
        }

        // Prepare update data for User table
        const updateData: Record<string, any> = {
            name, 
            address, 
            phoneNumber, 
            updatedBy: userId, 
            updatedAt: new Date()
        };

        // Include profile picture if uploaded
        if (req?.file?.filename) {
            updateData.profile = req.file.filename;
        }
         
        // Update user record in User table
        const result = await User.createQueryBuilder()
            .update(User)
            .set(updateData)
            .where("userId = :userId", { userId })
            .returning(["userId", "name", "emailId", "phoneNumber", "address", "profile"])
            .execute();

        // Check if the user was found and updated
        if (result?.affected === 0) {
            return createResponse(res, 404, MESSAGES?.USER_NOT_FOUND, [], false, true);
        }

        // Update password in Login table, if provided
        if (password) {
            await Login.createQueryBuilder()
                .update(Login)
                .set({ password,  updatedAt: new Date(), updatedBy: userId })
                .where("userId = :userId", { userId })
                .execute();
        }

        const updatedUserData = result.raw[0]; 

        return createResponse(res, 200, MESSAGES?.PROFILE_UPDATED, updatedUserData, true, false);

    } catch (err) {
        // tslint:disable-next-line:no-console
        console.error(MESSAGES?.RESET_ERROR, err); 

        return createResponse(res, 500, MESSAGES?.RESET_ERROR, [], false, true);
    }
};
