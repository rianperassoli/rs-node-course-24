import { test, beforeAll, afterAll } from "vitest";
import supertest from "supertest";
import { app } from "../src/app";

beforeAll(async () => {
  await app.ready();
});

afterAll(async () => {
  await app.close();
});

test("user can create a new transactions", async () => {
  await supertest(app.server)
    .post("/transactions")
    .send({
      title: "test",
      amount: 5000,
      type: "credit",
    })
    .expect(201);
});
