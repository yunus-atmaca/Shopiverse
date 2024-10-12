import styles from './styles';

import React from 'react';
import {View} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

import safeAreaInsets from '@/utils/safeAreaInstents';
import {useTheme} from '@/hooks/theme';
import TextInput from '@/components/TextInput';
import Styles from '@/theme/style';

const PageSearchHeader = () => {
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
            <View style={styles.input}>
              <TextInput
                enableErrorField={false}
                placeholder="Products, categories, brand"
                headingIcon="Search"
                inputHeight={Styles.vs(36)}
              />
            </View>
          </View>
        );
      }}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default PageSearchHeader;
