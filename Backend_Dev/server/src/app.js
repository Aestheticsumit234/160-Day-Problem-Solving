import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// importing routes
import userRoutes from "./routes/user.route.js";
import taskRoutes from "./routes/task.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // bhai akib bug yaha tha ye to likha hi nhi tha

// all routes here
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

export default app;
