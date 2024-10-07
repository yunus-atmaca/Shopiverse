import {Dimensions} from 'react-native';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const {width, height} = Dimensions.get('screen');

const scaleFactorWidth = width / guidelineBaseWidth;
const scaleFactorHeight = height / guidelineBaseHeight;

const horizontalScale = (size: number) => scaleFactorWidth * size;
const verticalScale = (size: number) => scaleFactorHeight * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const Styles = {
  guidelineBaseWidth,
  guidelineBaseHeight,
  device: {
    width,
    height,
  },
  hs: horizontalScale,
  vs: verticalScale,
  ms: moderateScale,
  spacing: {
    xl: 24,
    l: 20,
    r: 16,
    m: 12,
    s: 8,
  },
  radius: {
    s: moderateScale(8),
    m: moderateScale(12),
    r: moderateScale(16),
    c: moderateScale(200),
  },
  borderWidth: {
    s: 0.25,
    m: 0.5,
    r: 0.75,
    l: 1,
  },
};

export default Styles;
