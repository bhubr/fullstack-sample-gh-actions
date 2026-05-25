import request from "supertest";
import app from "../src/app";

describe("dummy", () => {
  it("works", async () => {
    const response = await request(app)
      .get("/users")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body.email).toEqual("foo@bar.com");
  });
});
