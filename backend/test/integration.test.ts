import request from "supertest";
import app from "../src/app";

describe("dummy", () => {
  it("works", async () => {
    const response = await request(app)
      .get("/message")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body.message).toEqual("Hello, Worldd!");
  });
});
