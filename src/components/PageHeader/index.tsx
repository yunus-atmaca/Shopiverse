import styles from './styles';

import React from 'react';
import {View} from 'react-native';

import {useTheme} from '@/hooks/theme';
import Text from '../Text';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import safeAreaInsets from '@/utils/safeAreaInstents';
import Icon from '../Icon';
import {navigationRef} from '@/navigation';

type Props = {
  header: string;
  renderBack?: boolean;
  disableGab?: boolean;
};

//use removeTop for PageWrapper to use this for any Page
const PageHeader = ({header, renderBack = true, disableGab = false}: Props) => {
  const theme = useTheme();

  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => {
        let defInsets = safeAreaInsets(insets);
        if (disableGab) defInsets = {...defInsets, top: 0};
        return (
          <View
            style={[
              styles.container,
              {backgroundColor: theme.appHeaderBG},
              {paddingTop: defInsets.top},
            ]}>
            <View style={styles.content}>
              {renderBack && (
                <Icon
                  onClick={() => navigationRef.goBack()}
                  containerStyle={styles.back}
                  name="Back"
                />
              )}
              <Text.H typography="semiBold" size={18}>
                {header}
              </Text.H>
            </View>
          </View>
        );
      }}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default PageHeader;
