export const createResponse = (
    res: any,
    statusCode: number = 200,  
    message: string = "OK",   
    data: any = [],           
    success: boolean = true, 
    error: boolean = false 
) => {
    return res.json({
        success,
        code: statusCode,
        message,
        data,
        error, 
    });
}; 