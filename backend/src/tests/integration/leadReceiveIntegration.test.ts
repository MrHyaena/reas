import { it, describe, expect } from "vitest";
import request from "supertest";
import { app } from "../../../src/app.js";

describe("leadReceive request integration testing", () => {
  it("passing data structure with empty data returns status 400", async () => {
    const response = await request(app.callback())
      .post("/lead")
      .send({
        personalInfo: { firstName: "", secondName: "", email: "", phone: "" },
        realEstateCategory: "",
        region: "",
        district: "",
      });
    expect(response.status).toBe(400);
  });
});
