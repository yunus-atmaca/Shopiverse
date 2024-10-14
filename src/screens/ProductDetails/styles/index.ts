import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, borderWidth} = Styles;
export default StyleSheet.create({
  content: {
    paddingHorizontal: hs(spacing.r),
    paddingVertical: vs(spacing.s),
    borderBottomWidth: borderWidth.m,
    borderTopWidth: borderWidth.m,
    marginTop: vs(spacing.m),
  },
});
