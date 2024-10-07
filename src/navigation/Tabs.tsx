import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Profile, Home, WhishList} from '@/screens';
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      //tabBar={props => <Tabbar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="WhishList" component={WhishList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Tabs;
