import {RootStackParamList} from './index';
import Tabs from './Tabs';

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ProductDetails} from '@/screens';

const Stack = createStackNavigator<RootStackParamList>();

function Root() {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}

export default Root;
