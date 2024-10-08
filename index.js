import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import App from './src/App';
import stores from './src/stores';
import {name as appName} from './app.json';

function Root() {
  return (
    <Provider store={stores}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Root);
