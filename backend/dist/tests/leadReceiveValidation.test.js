import { it, describe, expect } from "vitest";
import { leadReceiveValidation } from "../controllers/leadController.js";
describe("leadReceive controller testing", () => {
    it("validation with no data", () => {
        const missingArray = leadReceiveValidation({
            personalInfo: { firstName: "", secondName: "", email: "", phone: "" },
            realEstateCategory: "",
            region: "",
            district: "",
        });
        console.log(missingArray);
        expect(missingArray).toHaveLength(9);
    });
    it("validation with wrong email", () => {
        const missingArray = leadReceiveValidation({
            personalInfo: {
                firstName: "jmeno",
                secondName: "prijmeni",
                email: "email",
                phone: "999",
            },
            realEstateCategory: "",
            region: "",
            district: "",
        });
        console.log(missingArray);
        expect(missingArray[0]).toBe("Formát emailu");
    });
    it("validation with wrong email", () => {
        const missingArray = leadReceiveValidation({
            personalInfo: {
                firstName: "jmeno",
                secondName: "prijmeni",
                email: "email@gmail.com",
                phone: "999",
            },
            realEstateCategory: "",
            region: "",
            district: "",
        });
        console.log(missingArray);
        expect(missingArray[0]).toBe("Formát telefonu");
    });
    it("validation with wrong email", () => {
        const missingArray = leadReceiveValidation({
            personalInfo: {
                firstName: "jmeno",
                secondName: "prijmeni",
                email: "email@gmail.com",
                phone: "999999999",
            },
            realEstateCategory: "",
            region: "",
            district: "",
        });
        console.log(missingArray);
        expect(missingArray).toHaveLength(3);
    });
    it("validation with wrong email", () => {
        const missingArray = leadReceiveValidation({
            personalInfo: {
                firstName: "jmeno",
                secondName: "prijmeni",
                email: "email@gmail.com",
                phone: "999999999",
            },
            realEstateCategory: "item",
            region: "item",
            district: "item",
        });
        console.log(missingArray);
        expect(missingArray).toHaveLength(0);
    });
});
