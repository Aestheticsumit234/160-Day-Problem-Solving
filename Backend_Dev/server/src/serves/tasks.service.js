import Task from "../models/tasks.model.js";

export const createTask = async (
  title,
  description,
  status,
  priority,
  useId
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
    user: useId,
  });
  return newTask;
};

export const getAllTasks = async () => {
  const tasks = await Task.find({}).populate("user", "name email");
  return tasks;
};

export const getSingleTask = async (id) => {
  const tasks = await Task.findById(id).populate("user", "name email");
  return tasks;
};

export const updateSingleTask = async (
  id,
  title,
  description,
  status,
  priority
) => {
  const tasks = await Task.findById(id).populate("user", "name email");

  tasks.title = title || tasks.title;
  tasks.description = description || tasks.description;
  tasks.status = status || tasks.status;
  tasks.priority = priority || tasks.priority;

  await tasks.save();
  return tasks;
};

export const deleteSingleTask = async (id) => {
  const tasks = await Task.findByIdAndDelete(id);
  return tasks;
};
