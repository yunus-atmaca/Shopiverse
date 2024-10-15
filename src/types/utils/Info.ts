import {ImageSourcePropType} from 'react-native';

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

export enum CATEGORIES {
  FASHION_COSMETIC = 'fashion_cosmetic',
  ELECTRONIC_PHONE_COMPUTER = 'electronic_phone_computer',
  SUPERMARKET = 'supermarket',
  HOME_AND_FURNITURE = 'home_and_furniture',
}

export interface IProduct {
  id: string;
  start_rate: number;
  images: ImageSourcePropType[];
  brand: string;
  title: string;
  desc: string;
  price: string;
  discountedPrice: string | null;
  genders: ('woman' | 'man')[];
  category: CATEGORIES;
  subCategory: string;
  targetCategory: string;
  numberOfRate: string;
}

export interface IFavorite {
  productId: string;
  createdAt: number;
}

export interface ICartProduct {
  piece: number;
  isActive: boolean;
  product: IProduct;
}

export interface IReview {
  id: string;
  createdAt: number;
  fullName: string;
  rate: number;
  desc: string;
}

export interface IBanner {
  title: string;
  desc: string;
  call: string;
  img: ImageSourcePropType;
}

export type OrderStatus = 'Canceled' | 'Ongoing' | 'Completed' | 'Returned';
export interface IOrder {
  status: OrderStatus;
  id: number;
  img: ImageSourcePropType;
  orderDate: number;
  lastUpdate: number;
}
