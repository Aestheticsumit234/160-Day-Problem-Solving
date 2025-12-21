import express from "express";
import dotenv from "dotenv";

// importing routes
import userRoutes from "./routes/user.route.js";
import taskRoutes from "./routes/task.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all routes here
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

export default app;
