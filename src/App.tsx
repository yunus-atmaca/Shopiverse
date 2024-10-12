import ComposeProviders from './components/ComposeProviders';
import AppErrorBoundary from './components/AppErrorBoundary';
import ThemeProvider from './theme/ThemeProvider';
import Shopiverse from './Shopiverse';

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PortalProvider} from '@gorhom/portal';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['findHostInstance_DEPRECATED is deprecated in StrictMode']);

function App() {
  //<React.StrictMode>
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ComposeProviders
        components={[
          ThemeProvider,
          SafeAreaProvider,
          PortalProvider,
          KeyboardProvider,
        ]}>
        <AppErrorBoundary>
          <Shopiverse />
        </AppErrorBoundary>
      </ComposeProviders>
    </GestureHandlerRootView>
  );
}

export default App;
