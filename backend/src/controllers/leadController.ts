import { Lead } from "../models/leadModel.js";
import validator from "validator";

export async function leadReceive(ctx: any) {
  const body = await ctx.request.body;

  try {
    const missingArray: string[] = [];

    //Validation of data
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
    if (!body.realEstateCategory) {
      missingArray.push("Kategorie nemovitosti");
    }
    if (!body.region) {
      missingArray.push("Kraj");
    }
    if (!body.district) {
      missingArray.push("Okres");
    }

    console.log(missingArray);

    if (missingArray.length > 0) {
      const errorString = missingArray.join(", ");

      throw Error(errorString);
    }

    //Creating record in database

    //Zde je druhé ověření správnosti dat, neboť mongoose je nastavený tak,
    //aby špatný datový model zachytil, odmítl a vyhodil error
    const lead = await Lead.create({ ...body });

    ctx.status = 200;
    ctx.body = body;
  } catch (error: any) {
    ctx.status = 400;
    ctx.body = { error: error.message };
  }
}
