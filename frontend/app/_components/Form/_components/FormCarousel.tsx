"use client";

import React, { useState } from "react";
import { FormIntroduction } from "./FormIntroduction";
import { FormBody } from "./FormBody";

export type FormPart = number;

export default function FormCarousel() {
  const [formPart, setformPart] = useState<FormPart>(1);

  return (
    <>
      {formPart == 1 && <FormIntroduction setformPart={setformPart} />}
      {formPart == 2 && <FormBody />}
    </>
  );
}
