import styles from './styles/header';

import React from 'react';
import {View} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

import safeAreaInsets from '@/utils/safeAreaInstents';
import {useTheme} from '@/hooks/theme';
import TextInput from '@/components/TextInput';

const Header = () => {
  const theme = useTheme();

  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => {
        let defInsets = safeAreaInsets(insets);

        return (
          <View
            style={[
              styles.container,
              {backgroundColor: theme.appHeaderBG},
              {paddingTop: defInsets.top},
            ]}>
            <View style={{marginTop: 12}}>
              <TextInput
                placeholder="Products, categories, label"
                headingIcon="Search"
              />
            </View>
          </View>
        );
      }}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default Header;
