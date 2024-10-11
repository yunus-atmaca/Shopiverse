import categories from './categories';
import {IRoute, MainCategories} from './types';

import Category from './Category';
import Tabbar from './Tabbar';

import React, {useMemo, useState} from 'react';
import {} from 'react-native';
import {TabView, SceneRendererProps} from 'react-native-tab-view';

import PageHeader from '@/components/PageHeader';
import PageWrapper from '@/components/PageWrapper';
import Styles from '@/theme/style';

const Categories = () => {
  const [index, setIndex] = useState(0);

  const routes = useMemo<IRoute[]>(() => {
    const mainCategories = Object.keys(categories);
    const _routes: IRoute[] = [];
    mainCategories.forEach(mc => {
      _routes.push({
        key: mc,
        title: categories[mc as MainCategories].title,
        //sub_categories: categories[mc as MainCategories].sub_categories,
      });
    });

    return _routes;
  }, [categories]);

  const renderScene = ({
    route,
    jumpTo,
  }: SceneRendererProps & {route: IRoute}) => {
    return <Category route={route} />;
  };

  return (
    <PageWrapper removeBottom removeTop>
      <PageHeader header="Categories" />
      <TabView<IRoute>
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={props => <Tabbar {...props} />}
        onIndexChange={setIndex}
        initialLayout={{width: Styles.device.width}}
        swipeEnabled={false}
      />
    </PageWrapper>
  );
};

export default Categories;
