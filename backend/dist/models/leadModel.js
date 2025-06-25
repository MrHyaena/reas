import mongoose from "mongoose";
const Schema = mongoose.Schema;
//Creating MongoDB schema for Lead.
//When server tries to create new record in database for Leads group, it check if data structure matches Schema.
const leadSchema = new Schema({
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
}, { strict: "throw", timestamps: true });
export const Lead = mongoose.model("Lead", leadSchema);
