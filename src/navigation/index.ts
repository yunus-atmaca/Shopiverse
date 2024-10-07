import {
  CompositeScreenProps,
  NavigationContainerRefWithCurrent,
  NavigatorScreenParams,
  createNavigationContainerRef,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type TabParamList = {
  Home: undefined;
  WhishList: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  ProductDetails: undefined;
};

export type Pages = keyof TabParamList | keyof RootStackParamList;

type NavigationRef = NavigationContainerRefWithCurrent<RootStackParamList>;
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
