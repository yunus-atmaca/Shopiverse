import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

import {useTheme} from '@/hooks/theme';
import safeAreaInsets from '@/utils/safeAreaInstents';

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
        let defInsets = safeAreaInsets(insets);

        if (removeTop) defInsets = {...defInsets, top: 0};
        if (removeBottom) defInsets = {...defInsets, bottom: 0};

        return (
          <View style={[{flex: 1, backgroundColor: theme.page}, {
            paddingBottom: defInsets.bottom,
            paddingTop: defInsets.top
          }]}>
            {children}
          </View>
        );
      }}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default PageWrapper;
