const request = require("supertest")
const connection = require('../api/model/connection');
const { MongoClient } = require('mongodb')
const app = require('../app');


const NEW_TASK = {
  taskTitle: "new Task Title",
  taskDetail: "details for this task",
  status: "In Progress",
  created: "2022-02-15T22:06:30.496+00:00"       
}

describe('routes', () => {
  afterAll(async () => {
    const db = await connection('TaskList');
    await db.collection('List').deleteMany({});
  });

  it("get all tasks", async () => {
    const db = await connection('TaskList');
    await db.collection('List').insertOne(NEW_TASK);

    const response = await request(app)
     .get('/')
     console.log(response.body)
     expect(response.status).toBe(200)
     expect(response.body[0]).toHaveProperty('_id');
     expect(response.body[0]).toHaveProperty('taskTitle');
     expect(response.body[0]).toHaveProperty('taskDetail');
     expect(response.body[0]).toHaveProperty('created');
  })
  it("add new task", async () => {
    const response = await request(app)
      .post('/task')
      .send(NEW_TASK)
     expect(response.status).toBe(201)
  })
})