import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PortalProvider} from '@gorhom/portal';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import {LogBox} from 'react-native';

import ComposeProviders from './components/ComposeProviders';
import AppErrorBoundary from './components/AppErrorBoundary';

import ThemeProvider from './theme/ThemeProvider';
import Root from './navigation/Root';

LogBox.ignoreLogs(['findHostInstance_DEPRECATED is deprecated in StrictMode']);

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
          <AppErrorBoundary>
            <Root />
          </AppErrorBoundary>
        </ComposeProviders>
      </GestureHandlerRootView>
    </React.StrictMode>
  );
}

export default App;
