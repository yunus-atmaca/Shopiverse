import {
  FRONT_PADDING,
  TOP_HEIGHT,
  MID_HEIGHT,
  CARD_NUMBER_HEIGHT,
  FOOTER_HEIGHT,
  FOOTER_TITLE_HEIGHT,
  FOOTER_FIELD_HEIGHT,
} from '../helper';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  front: {
    padding: FRONT_PADDING,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  top: {
    height: TOP_HEIGHT,
  },
  chipImg: {
    height: 36,
    width: 45.6,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  mid: {
    height: MID_HEIGHT,
    justifyContent: 'center',
  },
  cardNumber: {
    height: CARD_NUMBER_HEIGHT,
    //borderWidth: 1.5,
    borderRadius: 14,
    paddingHorizontal: 12,
    justifyContent: 'center',
    //borderColor: 'white',
  },
  cardNamerText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  footer: {
    height: FOOTER_HEIGHT,
  },
  title: {
    color: 'white',
    fontWeight: '500',
    fontSize: 12,
    height: FOOTER_TITLE_HEIGHT,
  },
  cardHolderName: {
    height: FOOTER_FIELD_HEIGHT,
    minWidth: 72,
    borderRadius: 14,
    //borderWidth: 1.5,
    justifyContent: 'center',
    paddingHorizontal: 12,
    //borderColor: 'white',
  },
  expire: {
    height: FOOTER_FIELD_HEIGHT,
    minWidth: 36,
    borderRadius: 14,
    //borderWidth: 1.5,
    justifyContent: 'center',
    paddingHorizontal: 12,
    //borderColor: 'white',
  },
  footerText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});
