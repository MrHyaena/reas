import { Context } from "koa";
import validator from "validator";
import { LeadType } from "../types/leadType.js";
import leadRecordToDb from "./leadRecordToDb.js";

//Controller for lead receiving
export async function leadReceive(ctx: Context) {
  //Getting the body of request
  const body = (await ctx.request.body) as LeadType;

  try {
    //Creating record in database
    const missingArray: string[] = leadReceiveValidation(body);

    if (missingArray.length > 0) {
      const errorString = missingArray.join(", ");
      throw Error(errorString);
    }

    const response = leadRecordToDb(body);

    ctx.status = 201;
    ctx.body = { success: true, data: response };
  } catch (error: any) {
    ctx.status = 400;
    ctx.body = { success: false, error: error.message };
  }
}

//Validation function
export function leadReceiveValidation(data: LeadType) {
  const missingArray: string[] = [];

  //Validation of data
  if (!data.personalInfo) {
    missingArray.push("Chybí data");
  } else {
    if (!data.personalInfo.firstName) {
      missingArray.push("Křestní jméno");
    }
    if (!data.personalInfo.secondName) {
      missingArray.push("Příjmení");
    }

    if (!data.personalInfo.email) {
      missingArray.push("Email");
    }
    if (!validator.isEmail(data.personalInfo.email)) {
      missingArray.push("Formát emailu");
    }
    if (!data.personalInfo.phone) {
      missingArray.push("Telefon");
    }
    if (!/^[0-9]{9}$/.test(data.personalInfo.phone)) {
      missingArray.push("Formát telefonu");
    }
  }
  if (!data.realEstateCategory) {
    missingArray.push("Kategorie nemovitosti");
  }
  if (!data.region) {
    missingArray.push("Kraj");
  }
  if (!data.district) {
    missingArray.push("Okres");
  }

  return missingArray;
  //Checks if any validation failed
}
