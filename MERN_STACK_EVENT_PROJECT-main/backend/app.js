import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);

dbConnection();

app.listen(5000, () => {
  console.log(`Server listening at port 5000`);
});

export default app;
