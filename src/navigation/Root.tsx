import {RootStackParamList} from './index';
import Tabs from './Tabs';

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  SignUp,
  ProductDetails,
  Login,
  ForgotPassword,
  Countries,
  ModalWebview,
  MyOrders,
  MyReviews,
  MyAddresses,
  FAQ,
  AddAddress,
  MyCreditCards,
  AddCreditCard,
  MyCoupons,
} from '@/screens';

const Stack = createStackNavigator<RootStackParamList>();

function Root() {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Group>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="MyReviews" component={MyReviews} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="MyAddresses" component={MyAddresses} />
        <Stack.Screen name="MyCreditCards" component={MyCreditCards} />
        <Stack.Screen name="MyCoupons" component={MyCoupons} />
      </Stack.Group>

      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Countries" component={Countries} />
        <Stack.Screen name="ModalWebview" component={ModalWebview} />
        <Stack.Screen name="AddAddress" component={AddAddress} />
        <Stack.Screen name="AddCreditCard" component={AddCreditCard} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Root;
