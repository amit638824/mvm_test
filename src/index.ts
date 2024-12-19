import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv"; 

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// static serve path
app.use("/api/uploads", express.static("./src/uploads"));
// cronJob  
// PostgreSQL Database connection 
/** Error handling */
app.use((req: Request, res: Response, next: NextFunction) => {
  next();
}); 
 

app.get("/", (req: any, res: any) => {
  // tslint:disable-next-line:no-console
  res.send(" test Welcome to the server !!!");
});
 
app.get("/test", (req: any, res: any) => {
  // tslint:disable-next-line:no-console
  res.send("test Welcome to the 2020");
});
const PORT = process.env.PORT || 4800;
app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log("Hi test Server is Running 🚀 at Port " + PORT);
});
