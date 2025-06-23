export type PersonalInfoType = {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
};

export type LeadType = {
  personalInfo: PersonalInfoType;
  realEstateCategory: string;
  region: string;
  district: string;
};
