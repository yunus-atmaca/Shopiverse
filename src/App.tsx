import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PortalProvider} from '@gorhom/portal';
import {KeyboardProvider} from 'react-native-keyboard-controller';

import ComposeProviders from './components/ComposeProviders';
import ThemeProvider from './theme/ThemeProvider';
import {View} from 'react-native';

function App() {
  return (
    <React.StrictMode>
      <GestureHandlerRootView style={{flex: 1}}>
        <ComposeProviders
          components={[
            ThemeProvider,
            SafeAreaProvider,
            PortalProvider,
            KeyboardProvider,
          ]}>
          <View></View>
        </ComposeProviders>
        <SafeAreaProvider></SafeAreaProvider>
      </GestureHandlerRootView>
    </React.StrictMode>
  );
}

export default App;
