import {
  BACK_FOOTER_HEIGHT,
  BACK_PADDING,
  BACK_MID_HEIGHT,
  BACK_TOP_HEIGHT,
  MID_BAND_HEIGHT,
  MID_BAND_WIDTH,
  CVV_WIDTH,
  CVV_HEIGHT,
} from '../helper';

import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing} = Styles;
export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'space-between',
  },
  top: {
    height: BACK_TOP_HEIGHT,
    paddingTop: 24,
  },
  band: {
    height: 36,
    backgroundColor: '#1e8bc3',
  },
  footer: {
    height: BACK_FOOTER_HEIGHT,
    paddingEnd: BACK_PADDING,
    alignItems: 'flex-end',
  },
  mid: {
    height: BACK_MID_HEIGHT,
    paddingStart: 8,
    justifyContent: 'center',
  },
  midContent: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#1e8bc3',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'baseline',
    borderRadius: 8,
  },
  midBand: {
    height: MID_BAND_HEIGHT,
    width: MID_BAND_WIDTH,
    backgroundColor: '#e4f1fe',
    marginEnd: 8,
    borderRadius: 4,
  },
  cvv: {
    width: CVV_WIDTH,
    height: CVV_HEIGHT,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  cvvText: {
    fontWeight: 600,
    color: 'black',
    fontSize: 20,
  },
});
