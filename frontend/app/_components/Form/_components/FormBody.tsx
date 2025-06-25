"use client";

import React, { useState } from "react";

import {
  DistrictType,
  PersonalInfoType,
  RealEstateCategoryType,
  RegionType,
} from "../../../_types/FormularTypes";
import { PersonalInfo } from "../../FormPersonalInformation/_components/PersonalInfo";
import { RealEstateCategory } from "../../FormRealEstateCategory/_components/RealEstateCategory";
import { Summary } from "../../FormSummary/_components/Summary";
import { RepublicMap } from "../../FormMap/_components/RepublicMap";

export function FormBody() {
  //Personal information
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoType>({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
  });

  //Type of real estate state
  const [realEstateCategory, setRealEstateCategory] =
    useState<RealEstateCategoryType>({
      name: "",
      value: "",
    });

  //Okres State
  const [district, setDistrict] = useState<DistrictType>({
    name: "",
    value: "",
  });

  //Kraj state
  const [region, setRegion] = useState<RegionType>({
    name: "",
    value: "",
  });

  //Step of the formular
  const [formBodyPart, setFormBodyPart] = useState<number>(0);

  return (
    <>
      {formBodyPart == 0 && (
        <PersonalInfo
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          setFormBodyPart={setFormBodyPart}
          formBodyPart={formBodyPart}
        />
      )}
      {formBodyPart == 1 && (
        <RealEstateCategory
          setFormBodyPart={setFormBodyPart}
          formBodyPart={formBodyPart}
          realEstateCategory={realEstateCategory}
          setRealEstateCategory={setRealEstateCategory}
        />
      )}
      {formBodyPart == 2 && (
        <RepublicMap
          district={district}
          region={region}
          setFormBodyPart={setFormBodyPart}
          formBodyPart={formBodyPart}
          setRegion={setRegion}
          setDistrict={setDistrict}
        />
      )}
      {formBodyPart == 3 && (
        <Summary
          personalInfo={personalInfo}
          region={region}
          district={district}
          realEstateCategory={realEstateCategory}
          formBodyPart={formBodyPart}
          setFormBodyPart={setFormBodyPart}
        />
      )}
    </>
  );
}
