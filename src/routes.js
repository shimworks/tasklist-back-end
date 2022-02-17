const routes = require('express').Router();
const { getAllTasks, insertTask } = require('./api/controller/controllers');

routes.get('/', getAllTasks);
routes.post('/task', insertTask);

module.exports = routes;
