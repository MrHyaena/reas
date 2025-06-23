"use client";

import React, { useState } from "react";

import {
  KrajType,
  OkresType,
  PersonalInfoType,
  RealEstateCategoryType,
} from "../../_types/FormularTypes";
import { PersonalInfo } from "./PersonalInfo";
import { RealEstateCategory } from "./RealEstateCategory";
import { RepublicMap } from "./RepublicMap";
import { Summary } from "./Summary";

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
  const [okres, setOkres] = useState<OkresType>({
    name: "",
    value: "",
  });

  //Kraj state
  const [kraj, setKraj] = useState<KrajType>({
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
          okres={okres}
          kraj={kraj}
          setFormBodyPart={setFormBodyPart}
          formBodyPart={formBodyPart}
          setOkres={setOkres}
          setKraj={setKraj}
        />
      )}
      {formBodyPart == 3 && (
        <Summary
          personalInfo={personalInfo}
          kraj={kraj}
          okres={okres}
          realEstateCategory={realEstateCategory}
          formBodyPart={formBodyPart}
          setFormBodyPart={setFormBodyPart}
        />
      )}
    </>
  );
}
