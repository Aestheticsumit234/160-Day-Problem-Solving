import {
  createTask,
  deleteSingleTask,
  getAllTasks,
  getSingleTask,
  updateSingleTask,
} from "../serves/tasks.service.js";
export const createNewTask = async (req, res) => {
  try {
    const { title, description, status, priority, useId } = req.body;
    const newTask = await createTask(
      title,
      description,
      status,
      priority,
      useId
    );

    res.status(201).json({ success: true, data: newTask });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getAllTask = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await getSingleTask(id);
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, priority } = req.body;
    const updateTask = await updateSingleTask(
      id,
      title,
      description,
      status,
      priority
    );
    res.status(200).json({ success: true, data: updateTask });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await deleteSingleTask(id);
    res.status(200).json({ success: true, data: deleteTask });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
