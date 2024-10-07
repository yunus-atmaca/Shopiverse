import Root from './Root';

import React, {Suspense, lazy, memo} from 'react';
import {} from 'react-native';

//const AuthScreens = lazy(() => import('./AuthScreens'));
//const PublicScreens = lazy(() => import('./PublicScreens'));

type Props = {
  authenticated: boolean;
};

const Navigator = (props: Props) => {
  //if(props.authenticated)

  return (
    <Suspense>
      <Root />
    </Suspense>
  );
};

export default memo(Navigator);
