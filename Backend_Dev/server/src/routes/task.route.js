import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  createNewTask,
  deleteTask,
  getAllTask,
  getTask,
  updateTask,
} from "../controllers/task.controller.js";
const router = express.Router();

router.use(authMiddleware); // protected route

router.post("/create", createNewTask);
router.get("/all", getAllTask);
router.get("/task/:id", getTask);
router.patch("/update-task/:id", updateTask);
router.delete("/delete-task/:id", deleteTask);

export default router;
