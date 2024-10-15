import styles from './styles';

import React, {useState} from 'react';
import {Image, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {ICartProduct} from '@/types/utils/Info';
import {useTheme} from '@/hooks/theme';
import Styles from '@/theme/style';
import ProductImage from '@/components/ProductImage';
import Text from '@/components/Text';
import ProductPiece from '@/components/ProductPiece';
import {useAppDispatch} from '@/hooks/stores';
import {
  addProductToCart,
  removeProductFromCart,
  setProductActive,
} from '@/stores/controllers/user';

type Props = {
  data: ICartProduct;
};

const ProductInTheCart = ({data}: Props) => {
  const theme = useTheme();

  const dispatch = useAppDispatch();

  const onValueChange = () => {
    dispatch(setProductActive(data.product.id));
  };

  const onPlus = () => {
    dispatch(addProductToCart(data.product));
  };

  const onMinus = () => {
    dispatch(removeProductFromCart(data.product.id));
  };

  const {brand, title, desc, price, discountedPrice} = data.product;
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme.boxBG, borderColor: theme.border},
      ]}>
      <BouncyCheckbox
        isChecked={data.isActive}
        disableText
        size={Styles.hs(18)}
        fillColor={theme.checkBoxFilled as string}
        unFillColor={theme.checkBoxUnFilled as string}
        text="Custom Checkbox"
        iconStyle={{borderColor: theme.checkBoxFilled}}
        innerIconStyle={{borderWidth: 1}}
        textStyle={{fontFamily: 'JosefinSans-Regular'}}
        onPress={onValueChange}
      />
      <ProductImage containerStyle={styles.img} img={data.product.images[0]} />
      <View style={styles.info}>
        <Text.H typography="semiBold" size={14}>
          {brand}
        </Text.H>
        <Text.H color={theme.textSub} typography="semiBold" size={14}>
          {title}
        </Text.H>
        <Text.H color={theme.textSub} size={12}>
          {desc}
        </Text.H>
        <View style={styles.priceSection}>
          <View style={{flex: 1}}>
            <ProductPiece
              piece={data.piece}
              onMinus={onMinus}
              onPlus={onPlus}
            />
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text.P
              color={discountedPrice ? theme.textSub : theme.textHighlighted}
              size={14}
              style={{
                textDecorationLine: discountedPrice ? 'line-through' : 'none',
              }}
              typography={discountedPrice ? 'regular' : 'semiBold'}>
              {price}
            </Text.P>
            {discountedPrice && (
              <Text.P
                size={14}
                color={theme.textHighlighted}
                typography="semiBold">
                {discountedPrice}
              </Text.P>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductInTheCart;
