import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {borderWidth, hs, vs, spacing, radius} = Styles;
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: borderWidth.m,
    paddingHorizontal: hs(spacing.s),
    paddingVertical: vs(spacing.xxs),
    borderRadius: radius.c,
    alignSelf: 'baseline',
  },
  section: {
    width: hs(24),
    height: hs(24),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.xs,
  },
});
