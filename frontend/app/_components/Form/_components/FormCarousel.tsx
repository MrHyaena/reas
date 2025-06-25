"use client";

import React, { useState } from "react";
import { FormIntroduction } from "./FormIntroduction";
import { FormBody } from "./FormBody";

export type FormPart = number;

//Component splits formPage to two parts. First for introduction, second for Form inputs

export default function FormCarousel() {
  const [formPart, setformPart] = useState<FormPart>(1);

  return (
    <>
      {formPart == 1 && <FormIntroduction setformPart={setformPart} />}
      {formPart == 2 && <FormBody />}
    </>
  );
}
