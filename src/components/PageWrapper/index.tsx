import React, {PropsWithChildren} from 'react';
import {FlexAlignType, Platform, StatusBar, View} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

import {useTheme} from '@/hooks/theme';

type Props = {
  removeTop?: boolean;
  removeBottom?: boolean;
  /** stands for alignItems */
  ai?: FlexAlignType | undefined;
  /** stands for justifyContent */
  jc?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
};

const PageWrapper = ({
  removeTop = false,
  removeBottom = false,
  ai = undefined,
  jc = undefined,
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
          <View
            style={[
              {
                flex: 1,
                backgroundColor: theme.page,
                alignItems: ai,
                justifyContent: jc,
              },
              defInsets,
            ]}>
            {children}
          </View>
        );
      }}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default PageWrapper;
