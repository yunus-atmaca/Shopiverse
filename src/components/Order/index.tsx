import styles from './style';

import React, {useMemo} from 'react';
import {View} from 'react-native';

import {useTheme} from '@/hooks/theme';
import Text from '@/components/Text';
import Icon, {IconNames} from '@/components/Icon';
import ProductImage from '@/components/ProductImage';
import ButtonBaseLine from '@/components/ButtonBaseLine';
import {IOrder} from '@/types/utils/Info';
import dayjs from 'dayjs';

type Props = {
  data: IOrder;
};

const Order = ({data}: Props) => {
  const theme = useTheme();

  const _status = useMemo(() => {
    let _color = theme.error;
    let _icon: IconNames = 'Close';
    if (data.status === 'Completed') {
      _color = theme.success;
      _icon = 'Check';
    } else if (data.status === 'Ongoing') {
      _color = theme.warning;
      _icon = 'Clock';
    }

    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text.H
          style={{marginEnd: 4}}
          typography="semiBold"
          size={12}
          color={_color}>
          {data.status}
        </Text.H>
        <Icon color={_color} size={12} name={_icon} />
      </View>
    );
  }, [data.status]);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme.boxBG, borderColor: theme.borderLight},
      ]}>
      <ProductImage containerStyle={styles.img} img={data.img} />
      <View style={styles.content}>
        <View style={styles.title}>
          <View>
            <Text.H typography="semiBold" size={14}>
              {data.id}
            </Text.H>
            <Text.H color={theme.textSub} size={12}>
              {dayjs(data.orderDate).format('MM/DD/YYYY')}
            </Text.H>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text.H
              color={theme.textHighlighted}
              typography="semiBold"
              size={14}>
              Details
            </Text.H>
            <Icon color={theme.iconHighlighted} size={16} name="ArrowRight" />
          </View>
        </View>
        <View style={styles.bottom}>
          {_status}
          <ButtonBaseLine
            textColor={theme.textHighlighted}
            iconColor={theme.iconHighlighted}
            text={'Rate'}
            icon="Star"
          />
        </View>
      </View>
    </View>
  );
};

export default Order;
