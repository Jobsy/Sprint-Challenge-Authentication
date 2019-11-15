const request = require("supertest")
const server = require("../api/server")


describe("router", () => {
    describe("[GET] / endpoint", () => {
        test("test db env", () => {
            expect(process.env.DB_ENV).toBe("testing")
        })

        test("should return status code 200 ok", async () => {
            const response = await request(server).post("/api/auth/register")
            .send({username: "test5", password: "1234"})
            expect(response.status).toBe(201)
            return request(server).get("/")
            .expect("content-length", "139")
            .expect("content-type", /html/)
        })
    })
})