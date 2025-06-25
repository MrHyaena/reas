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

export type DistrictType = {
  name: string;
  value: string;
};

export type RegionType = {
  name: string;
  value: string;
};

export type DataForSubmitType = {
  personalInfo: PersonalInfoType;
  realEstateCategory: string;
  region: string;
  district: string;
};

export type RealEstateButtonType = {
  name: string;
  value: string;
  selected: boolean;
  onClick: () => void;
};
