import { MESSAGES } from "../helpers/constants"; 
import { createResponse } from "../helpers/response";
import { VehicleInfo } from "../Entities/vehicle_info"; 
import { VehicleData } from "../Entities/vehicle_data";

export const insertBulkSheetData = async (req: any, res: any) => {
    try {
        const { data } = req.body;  
        
        // Validate that data exists and is an array
        if (!data || !Array.isArray(data) || data.length === 0) {
            return createResponse(res, 400, "No data provided for insertion", [], false, true);
        }

        // Format the incoming data to match the entity fields
        const vehicleEntities = data.map((item: any) => ({
            vin: item.VIN || null,  
            title: item.Title !== "" ? item.Title : null, 
            brand: item.Brand !== "" ? item.Brand : null, 
            insurance: item.Insurance !== "" ? item.Insurance : null,  
            junkSalvage: item.Junk_Salvage !== "" ? item.Junk_Salvage : null, 
            status: 1,  
            createdAt: new Date(),  
            updatedAt: new Date(),  
            createdBy: "system", 
            updatedBy: "system"  
        })); 
 
       const result = await VehicleInfo.insert(vehicleEntities);  
         
        return createResponse(res, 201, MESSAGES?.CONTACT_SAVED, result);
    } catch (error) {
      // tslint:disable-next-line:no-console
        console.error(MESSAGES?.INTERNAL_SERVER_ERROR, error);

        return createResponse(res, 500, MESSAGES?.INTERNAL_SERVER_ERROR, [], false, true);
    }
}; 

export const getBulkSheetData = async (req: any, res: any) => {
    try {
      const { page = 1, limit = 10, ...filters } = req.query; 
      const queryBuilder = VehicleInfo.createQueryBuilder("VehicleInfo"); 
      Object.entries(filters).forEach(([key, value]) => {
        if (value && key !== "page" && key !== "limit") {
          queryBuilder.andWhere(`LOWER(VehicleInfo.${key}) LIKE LOWER(:${key})`, {
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
      
    } catch (error: any) {
      // tslint:disable-next-line:no-console
      console.error(MESSAGES?.INTERNAL_SERVER_ERROR, error);

      return createResponse(res, 500, MESSAGES?.INTERNAL_SERVER_ERROR, [], false, true);
    }
  };

  export const insertBulkSheetDatSheet2 = async (req: any, res: any) => {
    try {
        const { data } = req.body;

        // Validate that data exists and is an array
        if (!data || !Array.isArray(data) || data.length === 0) {
          
            return createResponse(res, 400, "No data provided for insertion", [], false, true);
        }

        // Format the incoming data to match the entity fields
        const vehicleEntities: any = data.map((item: any) => ({ 
            vin: item.VIN,
            vinId: item.Vin_id || null,
            member: item.Member || "",
            model: item.Make || "",
            brand: parseInt(item.Brand_Code) || null,
            insurance: null, 
            junkSalvage: null, 
            state: item.SOT || "",
            resolutionStatus: item.status || "",
            fraudState: null, 
            currentStatus: null, 
            alertDate: new Date(),     
            actionRequired: null, 
            titleStatus: null, 
            fuelType: null, 
            eventTypeId: null, 
            eventDate: new Date(),      
            summary: item.JSI_Info_set || "",
            status: item.status || "",
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: item.Member || "System",  
            updatedBy: item.Member || "System",  
        }));

        // Insert the formatted entities into the database
        const result = await VehicleData.insert(vehicleEntities);

        return createResponse(res, 201, MESSAGES?.CONTACT_SAVED, result);
    } catch (error) {
      // tslint:disable-next-line:no-console
        console.error(MESSAGES?.INTERNAL_SERVER_ERROR, error);

        return createResponse(res, 500, MESSAGES?.INTERNAL_SERVER_ERROR, [], false, true);
    }
};

export const getBulkSheetDataSheet2 = async (req: any, res: any) => {
    try {
      const { page = 1, limit = 10, ...filters } = req.query; 
      const queryBuilder = VehicleData.createQueryBuilder("VehicleData"); 
      Object.entries(filters).forEach(([key, value]) => {
        if (value && key !== "page" && key !== "limit") {
          queryBuilder.andWhere(`LOWER(VehicleData.${key}) LIKE LOWER(:${key})`, {
            [key]: `%${value}%` 
          });
        }
      });
   
      const offset = (parseInt(page as string) - 1) * parseInt(limit as string);
      const [items, totalItems] = await queryBuilder.skip(offset).take(parseInt(limit as string)).getManyAndCount();  
      const totalPages = Math.ceil(totalItems / parseInt(limit as string));
      
      return createResponse(res, 200, MESSAGES?.DATA_FETCH_SUCCESS, {
        currentPage: parseInt(page as string),
        totalPages,
        totalItems,
        items,
      }, false, true);
      
    } catch (error: any) {
      // tslint:disable-next-line:no-console
      console.error(MESSAGES?.INTERNAL_SERVER_ERROR, error);

      return createResponse(res, 500, MESSAGES?.INTERNAL_SERVER_ERROR, [], false, true);
    }
  }; 