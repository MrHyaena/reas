import { it, describe, expect, vi, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../../../src/app.js";
import { Lead } from "../../models/leadModel.js";
import { leadReceive } from "../../controllers/leadController.js";
import leadRecordToDb from "../../controllers/leadRecordToDb.js";

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
