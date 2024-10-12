import categories from './categories';
import {IRoute, MainCategories} from './types';

import Category from './Category';
import Tabbar from './Tabbar';

import React, {useMemo, useState} from 'react';
import {TabView, SceneRendererProps} from 'react-native-tab-view';

import PageWrapper from '@/components/PageWrapper';
import Styles from '@/theme/style';
import PageSearchHeader from '@/components/PageSearchHeader';

const Categories = () => {
  const [index, setIndex] = useState(0);

  const routes = useMemo<IRoute[]>(() => {
    const mainCategories = Object.keys(categories);
    const _routes: IRoute[] = [];
    mainCategories.forEach(mc => {
      _routes.push({
        key: mc,
        title: categories[mc as MainCategories].title,
      });
    });

    return _routes;
  }, [categories]);

  const renderScene = ({route}: SceneRendererProps & {route: IRoute}) => {
    return <Category route={route} />;
  };

  return (
    <PageWrapper removeBottom removeTop>
      <PageSearchHeader />
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
