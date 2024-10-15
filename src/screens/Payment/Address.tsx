import styles from './styles/address';

import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import {useAddresses} from '@/hooks/user';
import Styles from '@/theme/style';
import {navigationRef} from '@/navigation';

const Address = () => {
  const theme = useTheme();
  const {addresses} = useAddresses();
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (addresses && addresses.length > 0) setSelected(addresses[0].id);
  }, [addresses]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.boxBG,
          borderColor: theme.border,
        },
      ]}>
      <View style={styles.title}>
        <Text.H>Address</Text.H>
        <Text.H
          onPress={() =>
            navigationRef.navigate('AddAddress', {address: undefined})
          }
          color={theme.textHighlighted}
          typography="semiBold">
          Add Address
        </Text.H>
      </View>
      {addresses && addresses.length > 0 ? (
        <View>
          {addresses.map(_address => {
            const {id, line1, line2, province, district, postalCode, title} =
              _address;
            return (
              <View key={id} style={styles.address}>
                <BouncyCheckbox
                  isChecked={selected === id}
                  disableText
                  size={Styles.hs(18)}
                  fillColor={theme.checkBoxFilled as string}
                  unFillColor={theme.checkBoxUnFilled as string}
                  text="Custom Checkbox"
                  iconStyle={{borderColor: theme.checkBoxFilled}}
                  innerIconStyle={{borderWidth: 1}}
                  textStyle={{fontFamily: 'JosefinSans-Regular'}}
                  onPress={() => setSelected(id)}
                />
                <View style={styles.texts}>
                  <Text.H size={14} typography="semiBold">
                    {title}
                  </Text.H>
                  <Text.H size={12}>{`${line1} \n ${line2}`}</Text.H>
                  <Text.H
                    size={
                      12
                    }>{`${province}/${district}  ${postalCode}`}</Text.H>
                </View>
              </View>
            );
          })}
        </View>
      ) : (
        <Text.H size={14} style={{marginTop: 12}}>
          There is no registered address. To able to continue, you have to add
          delivery address.
        </Text.H>
      )}
    </View>
  );
};

export default Address;
