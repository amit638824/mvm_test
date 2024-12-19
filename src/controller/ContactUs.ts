 
import { ContactUs } from "../Entities/ContactUs";
import { MESSAGES } from "../helpers/constants"; 
import { sendContactFormEmail } from "../helpers/email";
import { createResponse } from "../helpers/response";
 
export const insertContactUs = async (req: any, res: any) => {
    try {
        const { name, email, phone, message, subject } = req.body;

        if (!email || !message) {
            return createResponse(res, 400, MESSAGES?.REQUIRED_FIELDS, [], false, true);
        }

        const newContactUs = new ContactUs();
        newContactUs.name = name;
        newContactUs.email = email;
        newContactUs.phone = phone;
        newContactUs.message = message;
        newContactUs.subject = subject;

        await newContactUs.save();
        
       await sendContactFormEmail(name , email , phone , message , subject);
        const responseData = {
            id: newContactUs.id,
            email: newContactUs.email,
            message: newContactUs.message,
        };

        return createResponse(res, 201, MESSAGES?.CONTACT_SAVED, responseData);
    } catch (error) {
        // tslint:disable-next-line:no-console
        console.error(MESSAGES?.INTERNAL_SERVER_ERROR, error);

        return createResponse(res, 500, MESSAGES?.INTERNAL_SERVER_ERROR, [], false, true);
    }
};

export const readContactUs = async (req: any, res: any) => {
    try {
        const { page = 1, limit = 10, ...filters } = req.query; 
        const queryBuilder = ContactUs.createQueryBuilder("ContactUs"); 
        Object.entries(filters).forEach(([key, value]) => {
          if (value && key !== "page" && key !== "limit") {
            queryBuilder.andWhere(`LOWER(ContactUs.${key}) LIKE LOWER(:${key})`, {
              [key]: `%${value}%` 
            });
          }
        });
     
        const offset = (parseInt(page as string) - 1) * parseInt(limit as string);
        const [items, totalItems] = await queryBuilder
          .skip(offset)  
          .take(parseInt(limit as string)) 
          .getManyAndCount();  
    
        const totalPages = Math.ceil(totalItems / parseInt(limit as string));

        return createResponse(res, 200, MESSAGES?.DATA_FETCH_SUCCESS, {
          currentPage: parseInt(page as string),
          totalPages,
          totalItems,
          items,
        }, false, true);
    } catch (error) {
        // tslint:disable-next-line:no-console
        console.error(MESSAGES?.INTERNAL_SERVER_ERROR, error);

        return createResponse(res, 500, MESSAGES?.INTERNAL_SERVER_ERROR, [], false, true);
    }
};

export const deleteContactUs = async (req: any, res: any) => {
    try {
        const { id } = req.params; 
        const contactMessage = await ContactUs.findOne(id);

        if (!contactMessage) {
            return createResponse(res, 404, MESSAGES?.CONTACT_NOT_FOUND, [], false, true);
        }

        await contactMessage.remove();

        return createResponse(res, 200, MESSAGES?.CONTACT_DELETED);
    } catch (error) {
        // tslint:disable-next-line:no-console
        console.error(MESSAGES?.INTERNAL_SERVER_ERROR, error);

        return createResponse(res, 500, MESSAGES?.INTERNAL_SERVER_ERROR, [], false, true);
    }
};
