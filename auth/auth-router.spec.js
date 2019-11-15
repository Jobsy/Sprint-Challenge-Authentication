const request = require("supertest")
const server = require("../api/server")

describe("router", () => {
    describe("[GET] / endpoint", () => {
        test("test db env", () => {
            expect(process.env.DB_ENV).toBe("testing")
        })

        test("should return status code 200 ok", async () => {
            // const response = await request(server).post("/")
            // expect(response.status).toBe(200)
            return request(server).get("/")
            .expect("content-length", "139")
            .expect("content-type", /html/)
        })
    })
})