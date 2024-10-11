import {NavigationState, SceneRendererProps} from 'react-native-tab-view';
import categories from './categories';
import {ImageSourcePropType} from 'react-native';

export type TargetCategory = {
  id: string;
  title: string;
  img: ImageSourcePropType;
};

export type SubCategory = {
  id: string;
  title: string;
  sub_categories: TargetCategory[];
};

export type MainCategories = keyof typeof categories;
export type MainCategory = {
  id: string;
  title: string;
  sub_categories: SubCategory[];
};

export interface IRoute {
  key: string;
  title: string;
}

export type TabbarProps = SceneRendererProps & {
  navigationState: NavigationState<IRoute>;
};
