import styles from './styles/creditCard';

import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {useTheme} from '@/hooks/theme';
import {useCreditCards} from '@/hooks/user';
import Text from '@/components/Text';
import Styles from '@/theme/style';
import {navigationRef} from '@/navigation';

const CreditCard = () => {
  const theme = useTheme();

  const {cards} = useCreditCards();
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (cards && cards.length > 0) setSelected(cards[0].id);
  }, [cards]);

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
        <Text.H>Credit Card</Text.H>
        <Text.H
          onPress={() =>
            navigationRef.navigate('AddCreditCard', {creditCard: undefined})
          }
          color={theme.textHighlighted}
          typography="semiBold">
          Add Credit Card
        </Text.H>
      </View>

      {cards && cards.length > 0 ? (
        <View>
          {cards.map(_card => {
            const {id, number, holderName, expireDate, cvv} = _card;
            return (
              <View key={id} style={styles.card}>
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
                    {number}
                  </Text.H>
                  <Text.H size={12}>{holderName}</Text.H>
                  <Text.H
                    size={
                      12
                    }>{`Valid THRU:${expireDate}   CVV: ${cvv}`}</Text.H>
                </View>
              </View>
            );
          })}
        </View>
      ) : (
        <Text.H size={14} style={{marginTop: 12}}>
          There is no registered credit card. To able to continue, you have to
          add payment method.
        </Text.H>
      )}
    </View>
  );
};

export default CreditCard;
