const  request  = require("supertest")
const connection = require('../api/model/connection')
const app = require('../app');


describe('routes', () => {
  it("get all tasks", async () => {
    // const tasks = await task.findAll()
    const db = await connection()
    const resp = await db.collection("List").find().toArray()
    console.log(resp)

    const response = await request(app)
     .get('')

     expect(response.status).toBe(200)
  })
})