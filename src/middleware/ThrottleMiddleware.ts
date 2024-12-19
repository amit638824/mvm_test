import rateLimit from "express-rate-limit";
import { createResponse } from "../helpers/response"; 

export const throttleMiddleware = rateLimit({
  windowMs: 1 * 30 * 1000, // 1 minute
  max: 20, // Limit each IP to 2 requests per windowMs
  standardHeaders: false, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: (req: any, res: any) => {
    const resetTime = req?.rateLimit?.resetTime;
    const remainingTime = resetTime 
      ? Math?.ceil((resetTime?.getTime() - Date?.now()) / 1000) 
      : "Unknown";

    const msg = `Too many requests. Please try again after ${remainingTime} seconds.`;

    return createResponse(res, 429, msg, [], false, true);
  },
});
