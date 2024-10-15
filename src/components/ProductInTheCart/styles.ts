import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    paddingHorizontal: hs(spacing.r),
    borderTopWidth: borderWidth.m,
    borderBottomWidth: borderWidth.m,
    paddingVertical: vs(spacing.s),
    flexDirection: 'row',
    marginVertical: vs(spacing.xs),
  },
  img: {
    width: hs(72),
    height: vs(128),
    marginStart: hs(spacing.s),
  },
  info: {
    marginStart: hs(spacing.s),
    flex: 1,
  },
  priceSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
