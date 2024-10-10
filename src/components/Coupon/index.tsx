import {useTheme} from '@/hooks/theme';
import styles from './styles';

import React from 'react';
import {ScrollView, StyleProp, View, ViewStyle} from 'react-native';
import Text from '@/components/Text';
import ButtonBaseLine from '@/components/ButtonBaseLine';
import {ICoupon} from '@/types/utils/Info';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  data: ICoupon;
};

const Coupon = ({containerStyle, data}: Props) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {backgroundColor: theme.boxBG, borderColor: theme.borderHighlighted},
      ]}>
      <View style={styles.left}>
        <View
          style={[styles.title, {backgroundColor: theme.borderHighlighted}]}>
          <Text.H typography="bold" color={theme.textReversed} size={12}>
            {data.brand}
          </Text.H>
        </View>
        <View style={styles.termOfUser}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {data.termOfUse.map((t, i) => {
              return (
                <Text.P key={'t-' + i} size={12}>{`${i + 1}.${t}`}</Text.P>
              );
            })}
          </ScrollView>
        </View>
        <View style={{backgroundColor: 'transparent'}}>
          {data.lowerLimit && (
            <Text.P color={theme.textSub} size={10}>
              {`Min alisveris tutari:${data.lowerLimit}`}
            </Text.P>
          )}
          {data.expireDate && (
            <Text.P color={theme.textSub} size={10}>
              {`Son kullanma tarihi:${data.expireDate}`}
            </Text.P>
          )}
        </View>
      </View>
      <View
        style={[
          styles.right,
          {
            backgroundColor: theme.boxBGHighlighted,
          },
        ]}>
        <Text.P
          typography="semiBold"
          color={theme.textReversed}
          align="center"
          size={10}>
          {data.title}
        </Text.P>
        <Text.H
          align="center"
          style={{marginTop: 4}}
          size={20}
          typography="bold"
          color={theme.textReversed}>
          {data.discount}
        </Text.H>
        <ButtonBaseLine text="Urunleri Gor" />
      </View>
    </View>
  );
};

export default Coupon;
