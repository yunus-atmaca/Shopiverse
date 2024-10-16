import {
  CompositeScreenProps,
  NavigationContainerRefWithCurrent,
  NavigatorScreenParams,
  createNavigationContainerRef,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {ICountry} from '@/screens/Countries/types';
import {IAddress, ICartProduct, ICoupon, ICreditCard} from '@/types/utils/Info';

export type TabParamList = {
  Home: undefined;
  WhishList: undefined;
  Profile: undefined;
  Cart: undefined;
  Categories: undefined;
};

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  ProductDetails: {
    productId: string;
  };
  Login: undefined;
  MyOrders: undefined;
  MyReviews: undefined;
  MyAddresses: undefined;
  MyCoupons: {
    coupons: ICoupon[] | undefined;
  };
  FAQ: undefined;
  MyCreditCards: undefined;
  AddAddress: {
    address: IAddress | undefined;
  };
  AddCreditCard: {
    creditCard: ICreditCard | undefined;
  };
  ForgotPassword: {
    country?: ICountry;
  };
  Countries: {
    navigateTo?: Pages;
  };
  ModalWebview: {
    url: string;
  };
  SignUp: {
    country?: ICountry;
  };
  Payment: {
    data: ICartProduct[];
  };
  Onboarding: undefined;
};

export type Pages = keyof TabParamList | keyof RootStackParamList;

type NavigationRef = NavigationContainerRefWithCurrent<
  RootStackParamList & TabParamList
>;
export const navigationRef: NavigationRef = createNavigationContainerRef();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
