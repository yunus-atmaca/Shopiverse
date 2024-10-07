import React, {PropsWithChildren} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

import {useTheme} from '@/hooks/theme';

type Props = {
  removeTop?: boolean;
  removeBottom?: boolean;
};

const PageWrapper = ({
  removeTop = false,
  removeBottom = false,
  children,
}: Props & PropsWithChildren) => {
  const theme = useTheme();

  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => {
        let defInsets = insets ?? {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        };

        if (Platform.OS === 'android')
          defInsets = {
            ...defInsets,
            top: StatusBar.currentHeight ?? defInsets.top,
          };
        if (removeTop) defInsets = {...defInsets, top: 0};
        if (removeBottom) defInsets = {...defInsets, bottom: 0};

        //console.debug('insets => ', defInsets);
        return (
          <View style={[{flex: 1, backgroundColor: theme.page}, defInsets]}>
            {children}
          </View>
        );
      }}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default PageWrapper;
