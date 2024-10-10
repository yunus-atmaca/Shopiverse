import {LayoutRectangle, MeasureOnSuccessCallback} from 'react-native';

export const creditCardTypes = {
  visa: {
    width: 117.5,
    height: 36,
    image: require('@/assets/images/visa.png'),
  },
  mastercard: {
    width: 46.5,
    height: 36,
    image: require('@/assets/images/mastercard.png'),
  },
  'american-express': {
    width: 56.2,
    height: 36,
    image: require('@/assets/images/amex.png'),
  },
  discover: {
    width: 56,
    height: 36,
    image: require('@/assets/images/discover.png'),
  },
  jcb: {
    width: 46.7,
    height: 36,
    image: require('@/assets/images/JCB.png'),
  },
  maestro: {
    width: 60.2,
    height: 36,
    image: require('@/assets/images/maestro.png'),
  },
};

export type CardTypes = keyof typeof creditCardTypes;
/*export enum FrontFocus {
  CARD_NUMBER = 'card-number',
  CARDHOLDER_NAME = 'cardholder-name',
  VALID_THRU = 'valid-thru',
}*/

export enum Focus {
  CARD_NUMBER = 'card-number',
  CARDHOLDER_NAME = 'cardholder-name',
  VALID_THRU = 'valid-thru',
  CVV = 'cvv',
}
export type FocusWidth = {
  [key in Focus]: number;
};
