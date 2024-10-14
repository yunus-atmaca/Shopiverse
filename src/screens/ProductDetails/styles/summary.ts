import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: hs(spacing.r),
    paddingTop: vs(spacing.s),
    borderTopWidth: borderWidth.m,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
