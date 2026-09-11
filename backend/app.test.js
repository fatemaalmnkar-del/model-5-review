const request = require("supertest");
const app = require("./app");

describe("Express API tests", () => {

  test("GET / should return Hello World!", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello World!");
  });

  test("GET /api should return message", async () => {
    const response = await request(app).get("/api");

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
      message: "Hello from the server express!"
    });
  });

  test("GET /api/server should say server is running", async () => {
    const response = await request(app).get("/api/server");

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
      message: "server is running!"
    });
  });

});