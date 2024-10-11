import styles from './styles';

import React from 'react';
import {View} from 'react-native';

import {useTheme} from '@/hooks/theme';
import {IAddress} from '@/types/utils/Info';
import {navigationRef} from '@/navigation';
import ButtonBaseLine from '@/components/ButtonBaseLine';
import Text from '@/components/Text';

type Props = {
  data: IAddress;
  onDelete: (address: IAddress) => void;
};

const Address = ({data, onDelete}: Props) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.address,
        {
          backgroundColor: theme.boxBG,
          borderColor: theme.borderLight,
        },
      ]}>
      <Text.P size={14}>{data.fullName}</Text.P>
      <Text.P color={theme.textSub} size={12}>
        {data.phone}
      </Text.P>

      <Text.P style={{marginTop: 8}} color={theme.textSub} size={12}>
        {data.line1 + '\n' + data.line2}
      </Text.P>
      <Text.P size={14}>
        {data.district + '/' + data.province + '  ' + data.postalCode}
      </Text.P>

      <View style={styles.icons}>
        <ButtonBaseLine
          containerStyle={{borderWidth: 0}}
          icon="Edit"
          text="Edit"
          onClick={() => {
            navigationRef.navigate('AddAddress', {address: data});
          }}
        />

        <ButtonBaseLine
          containerStyle={{borderWidth: 0}}
          icon="Delete"
          iconColor={theme.iconError}
          text="Delete"
          onClick={() => onDelete(data)}
        />
      </View>
    </View>
  );
};

export default Address;
