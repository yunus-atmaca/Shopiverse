import {useTheme} from '@/hooks/theme';
import styles from './styles/summary';

import React from 'react';
import {View} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

import safeAreaInsets from '@/utils/safeAreaInstents';
import Text from '@/components/Text';
import Button from '@/components/Button';

const Summary = () => {
  const theme = useTheme();

  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => {
        const defIn = safeAreaInsets(insets);

        return (
          <View
            style={[
              styles.container,
              {borderColor: theme.border},
              {paddingBottom: defIn.bottom + 10},
              {backgroundColor: theme.boxBG},
            ]}>
            <View style={{flex: 1}}>
              <Text.H typography='bold'>17.400$</Text.H>
            </View>
            <View style={{flex: 1}}>
              <Button style={{marginEnd: 0}} text={'Add to Cart'} />
            </View>
          </View>
        );
      }}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default Summary;
