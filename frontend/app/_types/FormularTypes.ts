export type PersonalInfoType = {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
};

export type EstateTypeType = {
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
  estateType: string;
  region: string;
  district: string;
};

export type EstateTypeButtonType = {
  name: string;
  value: string;
  selected: boolean;
  onClick: () => void;
};
