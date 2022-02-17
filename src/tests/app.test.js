const  request  = require("supertest")
const app = require('../app');


describe('routes', () => {
  it("get all tasks", async () => {
    // const tasks = await task.findAll()

    const response = await request(app)
     .get('')

     expect(response.status).toBe(200)
  })
})