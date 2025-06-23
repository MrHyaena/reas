import mongoose from "mongoose";

const Schema = mongoose.Schema;

const leadSchema = new Schema(
  {
    personalInfo: {
      firstName: {
        type: String,
        required: true,
      },
      secondName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    realEstateCategory: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
  },
  { strict: "throw" }
);

export const Lead = mongoose.model("Lead", leadSchema);
