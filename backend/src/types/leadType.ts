export type PersonalInfoType = {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
};

export type LeadType = {
  personalInfo: PersonalInfoType;
  estateType: string;
  region: string;
  district: string;
};
