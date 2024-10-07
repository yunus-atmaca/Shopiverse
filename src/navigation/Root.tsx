import {RootStackParamList} from './index';
import Tabs from './Tabs';

import React, {createRef, useCallback, useRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  NavigationState,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ProductDetails} from '@/screens';

const Stack = createStackNavigator<RootStackParamList>();

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamList>>();
function Root() {
  const isReady = useRef(false);

  const onStateChange = (state: NavigationState | undefined) => {
    if (state && isReady.current) {
      const current = navigationRef.current?.getCurrentRoute();
      if (current) {
      }
    }
  };

  const onReady = useCallback(() => {
    isReady.current = true;
    setTimeout(() => {}, 150);
  }, []);

  return (
    <NavigationContainer
      onStateChange={onStateChange}
      onReady={onReady}
      ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;
