import TabBar from './Tabbar';

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Profile, Home, WhishList, Cart} from '@/screens';
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="WhishList" component={WhishList} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Tabs;
