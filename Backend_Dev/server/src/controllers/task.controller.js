// controllers/task.controller.js
import {
  createTask,
  deleteSingleTask,
  getAllTasks,
  getSingleTask,
  updateSingleTask,
} from "../serves/tasks.service.js";

export const createNewTask = async (req, res) => {
  try {
    const { title, description, status, priority } = req.body;
    const userId = req.user._id;

    const task = await createTask(title, description, status, priority, userId);

    res.status(201).json({ success: true, data: task });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getAllTask = async (req, res) => {
  try {
    const tasks = await getAllTasks(req.user._id);
    res.json({ success: true, data: tasks });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await getSingleTask(req.params.id, req.user._id);
    res.json({ success: true, data: task });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, description, status, priority } = req.body;

    const task = await updateSingleTask(
      req.params.id,
      req.user._id,
      title,
      description,
      status,
      priority
    );

    res.json({ success: true, data: task });
  } catch (err) {
    res.status(403).json({ success: false, message: err.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await deleteSingleTask(req.params.id, req.user._id);

    res.json({ success: true, message: "Task deleted", data: task });
  } catch (err) {
    res.status(403).json({ success: false, message: err.message });
  }
};
