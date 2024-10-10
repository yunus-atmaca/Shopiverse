export interface IAddress {
  id: string;
  line1: string;
  line2: string | undefined;
  province: string;
  district: string;
  postalCode: string;
  fullName: string;
  phone: string;
  title: string;
}

export interface ICreditCard {
  id: string;
  number: string;
  holderName: string;
  expireDate: string;
  cvv: string;
}

export interface ICoupon {
  expireDate: string;
  brand: string;
  title: string;
  desc: string;
  discount: string;
  lowerLimit: string | undefined;
  termOfUse: string[];
}
