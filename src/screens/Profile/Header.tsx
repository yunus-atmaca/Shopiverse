import styles from './styles/header';

import React, {memo} from 'react';
import {View} from 'react-native';

import Text from '@/components/Text';
import Icon from '@/components/Icon';

type Props = {
  fullName: string;
};

const Header = ({fullName}: Props) => {
  return (
    <View style={[styles.header]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon hasContainerStyle containerSize={48} name="Person" />
        <Text.H style={{marginStart: 8}} typography="semiBold">
          {fullName}
        </Text.H>
      </View>
      <Icon hasContainerStyle name="Notification" />
    </View>
  );
};

export default memo(Header, () => true);
