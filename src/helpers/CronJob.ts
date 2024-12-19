import cron from "node-cron"; 

export const test = () => { 
        cron.schedule("*/10 * * * * *", function() {
            
            const now = new Date();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            // tslint:disable-next-line:no-console
           console.log(`Current Time: ${minutes}:${seconds}`);
        });
    
};
