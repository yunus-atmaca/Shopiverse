import Styles from '@/theme/style';

export const FRONT_PADDING = 16;
export const TOP_HEIGHT = 36;
export const MID_HEIGHT = 76;
export const FOOTER_HEIGHT = 52;

export const FOOTER_FIELD_HEIGHT = 32;
export const FOOTER_TITLE_HEIGHT = 16;

export const CARD_WIDTH = Styles.device.width - 32 - 24;
export const CARD_HEIGHT =
  FOOTER_HEIGHT + MID_HEIGHT + TOP_HEIGHT + FRONT_PADDING * 2;

export const CARD_NUMBER_HEIGHT = 48;
export const CARD_NUMBER_WIDTH = CARD_WIDTH - FRONT_PADDING * 2;
export const CARD_NUMBER_POS_Y =
  FRONT_PADDING + TOP_HEIGHT + (MID_HEIGHT - CARD_NUMBER_HEIGHT) / 2;
export const CARD_NUMBER_POS_X = FRONT_PADDING;

//export const CARDHOLDER_NAME_HEIGHT = 36;
export const CARDHOLDER_NAME_POS_X = FRONT_PADDING;
export const CARDHOLDER_NAME_POS_Y =
  FRONT_PADDING + TOP_HEIGHT + MID_HEIGHT + FOOTER_TITLE_HEIGHT;

//export const VALID_THRU_HEIGHT = 36;
export const VALID_THRU_POS_X = CARD_WIDTH - FRONT_PADDING;
export const VALID_THRU_POS_Y =
  FRONT_PADDING + TOP_HEIGHT + MID_HEIGHT + FOOTER_TITLE_HEIGHT;

export const BACK_TOP_HEIGHT = 60;
export const BACK_FOOTER_HEIGHT = 56;
export const BACK_MID_HEIGHT =
  CARD_HEIGHT - BACK_TOP_HEIGHT - BACK_FOOTER_HEIGHT;
export const BACK_PADDING = 16;
export const MID_BAND_WIDTH = CARD_WIDTH * 0.45;
export const MID_BAND_HEIGHT = 32;
export const CVV_WIDTH = 64;
export const CVV_HEIGHT = MID_BAND_HEIGHT;

export const maskCardNumber = (
  number: string,
  gabs?: number[],
  lengths?: number[],
) => {
  const cardNumber = number.replaceAll(' ', '');

  let masked = '';
  const isGabArray = gabs && Array.isArray(gabs);
  for (let i = 0; i < cardNumber.length; ++i) {
    if (isGabArray && gabs.includes(i)) {
      masked += ' ';
    }
    masked += cardNumber.charAt(i);
  }

  const end = lengths ? lengths[lengths.length - 1] : masked.length;
  return masked.substring(0, end);
};

export const maskExpireDate = (date: string) => {
  const expireDate = date.replaceAll('/', '');

  let masked = '';
  for (let i = 0; i < expireDate.length; ++i) {
    if (i == 2) {
      masked += '/';
    }
    masked += expireDate.charAt(i);
  }

  return masked.substring(0, 5);
};

export const maskCVV = (cvv: string) =>{
  return cvv.substring(0, 3);
}
