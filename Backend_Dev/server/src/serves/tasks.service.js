import Task from "../models/tasks.model.js";

export const createTask = async (
  title,
  description,
  status,
  priority,
  userId
) => {
  const task = await Task.findOne({ title });
  if (task) {
    throw new Error("Task already exists");
  }

  const newTask = await Task.create({
    title,
    description,
    status,
    priority,
    user: userId,
  });
  return newTask;
};

export const getAllTasks = async () => {
  const tasks = await Task.find({}).populate("user", "name email");
  return tasks;
};

export const getSingleTask = async (taskId, userId) => {
  const task = await Task.findOne({ _id: taskId, user: userId });
  return task;
};

export const updateSingleTask = async (
  id,
  userId,
  title,
  description,
  status,
  priority
) => {
  const task = await Task.findOne({ _id: id, user: userId });

  if (!task) throw new Error("Task not found");

  task.title = title ?? task.title;
  task.description = description ?? task.description;
  task.status = status ?? task.status;
  task.priority = priority ?? task.priority;

  await task.save();
  return task;
};

export const deleteSingleTask = async (id, userId) => {
  const task = await Task.findOneAndDelete({ _id: id, user: userId });
  if (!task) throw new Error("Task not found");
  return task;
};
