
import jwt from "jsonwebtoken";  
import { MESSAGES } from "../helpers/constants";
// Middleware function to verify the JWT token on sign-in requests
export const AuthSignIn = (req: any, res: any, next: any): void => { 
  const authHeader: string | undefined = req.headers.authorization; 
  const token: string | undefined = authHeader && authHeader.split(" ")[1]; 
  if (!token) {
    res.status(401).json({
      success: false,
      code: 401,
      message: MESSAGES?.ACCESS_DENIED,
      error: true,
    });

    return;
  } 
  
  jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err, decoded) => { 
    if (err) {
      res.status(403).json({
        success: false,
        code: 403,
        message: "Invalid token.",
        error: true,
      });
      
      return;
    }

     req.user = decoded as { id: string; email: string };  
    next();
  });
};
