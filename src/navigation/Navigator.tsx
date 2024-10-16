import Root from './Root';

import React, {Suspense, lazy, memo, useEffect} from 'react';
import {} from 'react-native';
import BootSplash from 'react-native-bootsplash';

import {useAppSession} from '@/hooks/utils';

//const AuthScreens = lazy(() => import('./AuthScreens'));
//const PublicScreens = lazy(() => import('./PublicScreens'));

type Props = {
  authenticated: boolean;
};

const Navigator = (props: Props) => {
  useAppSession();

  useEffect(() => {
    setTimeout(async () => {
      await BootSplash.hide({fade: true});
    }, 2000);
  }, []);

  //if(props.authenticated)
  return (
    <Suspense>
      <Root />
    </Suspense>
  );
};

export default memo(Navigator);
