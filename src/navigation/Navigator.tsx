import Root from './Root';

import React, {Suspense, lazy, memo} from 'react';
import {} from 'react-native';

import {useAppSession} from '@/hooks/utils';

//const AuthScreens = lazy(() => import('./AuthScreens'));
//const PublicScreens = lazy(() => import('./PublicScreens'));

type Props = {
  authenticated: boolean;
};

const Navigator = (props: Props) => {
  useAppSession();

  //if(props.authenticated)
  return (
    <Suspense>
      <Root />
    </Suspense>
  );
};

export default memo(Navigator);
