const request = require("supertest")
const server = require("./server")

describe("server", () => {
    describe("[GET] / endpoint", () => {
       
        test("should return status code 200 ok", async () => {
            const response = await request(server).get("/")
            expect(response.status).toBe(200)
        })

    
    })
})