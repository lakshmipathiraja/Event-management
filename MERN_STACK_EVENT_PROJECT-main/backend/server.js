import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config();
const corsOptions = {
    origin: 'http://localhost:5173', // Your frontend origin
    credentials: true // Allow credentials to be sent
  };
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);

dbConnection();

app.listen(4000, () => {
  console.log(`Server listening at port 4000`);
});

export default app;
