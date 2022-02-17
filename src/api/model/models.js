const connection = require('./connection');

const getAllTasks = async () => {
  const db = await connection('TaskList');
  const response = await db.collection('List').find().toArray();
  return response;
};
const insertTask = async (data) => {
  const db = await connection('TaskList');
  const response = await db.collection('List').insertOne(data);
  return response;
};

module.exports = {
  getAllTasks,
  insertTask,
};
