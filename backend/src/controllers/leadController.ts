import { Context } from "koa";
import { Lead } from "../models/leadModel.js";
import validator from "validator";
import { LeadType } from "../types/leadType.js";

//Controller for lead receiving
export async function leadReceive(ctx: Context) {
  //Getting the body of request
  const body = (await ctx.request.body) as LeadType;

  try {
    const missingArray: string[] = [];

    //Validation of data
    if (!body.personalInfo) {
      missingArray.push("Chybí data");
    } else {
      if (!body.personalInfo.firstName) {
        missingArray.push("Křestní jméno");
      }
      if (!body.personalInfo.secondName) {
        missingArray.push("Příjmení");
      }
      if (!body.personalInfo.phone) {
        missingArray.push("Telefon");
      }
      if (!/^[0-9]{9}$/.test(body.personalInfo.phone)) {
        missingArray.push("Formát telefonu");
      }
      if (!body.personalInfo.email) {
        missingArray.push("Email");
      }
      if (!validator.isEmail(body.personalInfo.email)) {
        missingArray.push("Formát emailu");
      }
    }
    if (!body.realEstateCategory) {
      missingArray.push("Kategorie nemovitosti");
    }
    if (!body.region) {
      missingArray.push("Kraj");
    }
    if (!body.district) {
      missingArray.push("Okres");
    }

    //Checks if any validation failed
    if (missingArray.length > 0) {
      const errorString = missingArray.join(", ");
      throw Error(errorString);
    }

    //Creating record in database

    //Zde je druhé ověření správnosti dat, neboť mongoose je nastavený tak,
    //aby špatný datový model zachytil, odmítl a vyhodil error
    const response = await Lead.create({ ...body });

    ctx.status = 201;
    ctx.body = { success: true, data: response };
  } catch (error: any) {
    ctx.status = 400;
    ctx.body = { success: false, error: error.message };
  }
}
