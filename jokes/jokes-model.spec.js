
const request = require("supertest")
const server = require("../api/server")
const users = require("./jokes-model")
const db = require("../database/dbConfig")

beforeEach(async () => {
    await db('users').truncate();
});

describe("users model", () => {
    describe("insert function", () => {
        test("should insert a user", async () => {
            await users.add({ username: "tessy", password: "1234" })
            const Users = await db("users")
            expect(Users).toHaveLength(1)
        })
    })
})

describe("server", () => {
    describe("[GET] / endpoint", () => {
      
         test("should find user", async () => {
            // const response = await request(server).get("/api/jokes")
            // expect(response.status).toBe(201)
            return request(server).get("/")
            .expect("content-length", "139")
            .expect("content-type", /text/)
            
        })
    })
})