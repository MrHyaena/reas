import { Lead } from "../models/leadModel.js";
import { LeadType } from "../types/leadType.js";

async function leadRecordToDb(body: LeadType) {
  //Here is second validation in mongoose itself. It is set to throw error for invalid and missing data.
  const response = await Lead.create({ ...body });
  return response;
}

export default leadRecordToDb;
