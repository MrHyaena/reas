export type PersonalInfoType = {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
};

export type RealEstateCategoryType = {
  name: string;
  value: string;
};

export type OkresType = {
  name: string;
  value: string;
};

export type KrajType = {
  name: string;
  value: string;
};

export type DataForSubmitType = {
  personalInfo: PersonalInfoType;
  realEstateCategory: RealEstateCategoryType;
  kraj: KrajType;
  okres: OkresType;
};
