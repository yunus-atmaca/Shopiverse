import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, radius, device} = Styles;
export default StyleSheet.create({
  page: {
    flex: 1,
    width: device.width,
    paddingHorizontal: hs(spacing.r),
    alignItems: 'center',
    paddingTop: vs(spacing.xxl),
  },
  image: {
    width: hs(256),
    height: hs(256),
    resizeMode: 'contain',
    marginTop: vs(spacing.xxl),
  },
  footer: {
    width: '100%',
    marginBottom: vs(spacing.r),
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vs(48),
  },
  indicator: {
    height: hs(6),
    borderRadius: radius.c,
    marginEnd: hs(spacing.s),
  },
});
