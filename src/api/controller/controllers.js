const model = require('../model/models');

const getAllTasks = async (_req, res) => {
  const result = await model.getAllTasks();
  res.status(200).json(result);
};
const insertTask = async (req, res) => {
  const data = req.body;
  await model.insertTask(data);
  res.status(201).json({ message: 'Created' });
};

module.exports = {
  getAllTasks,
  insertTask,
};
