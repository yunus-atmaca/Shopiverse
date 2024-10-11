import {NavigationState, SceneRendererProps} from 'react-native-tab-view';
import categories from './categories';
import {ImageSourcePropType} from 'react-native';

export type MainCategories = keyof typeof categories;

export type Category = {
  title: string;
  img: ImageSourcePropType;
};

export type MainSubCategory = {
  title: string;
  sub_categories: Category[];
};

export interface IRoute {
  key: string;
  title: string;
}

export type TabbarProps = SceneRendererProps & {
  navigationState: NavigationState<IRoute>;
};
