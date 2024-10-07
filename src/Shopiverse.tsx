import Navigator from './navigation/Navigator';
import {navigationRef} from './navigation';

import React, {useCallback, useRef} from 'react';
import {NavigationContainer, NavigationState} from '@react-navigation/native';

const Shopiverse = () => {
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
  }, []);

  return (
    <NavigationContainer
      //initialState={initialState}
      onStateChange={onStateChange}
      onReady={onReady}
      //theme={navigationTheme}
      ref={navigationRef}
      //linking={linkingConfig}
    >
      <Navigator authenticated />
    </NavigationContainer>
  );
};

export default Shopiverse;
