import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, spacing, borderWidth, hs} = Styles;
export default StyleSheet.create({
  container: {
    paddingVertical: vs(spacing.s),
    marginTop: vs(spacing.m),
    borderTopWidth: borderWidth.m,
    borderBottomWidth: borderWidth.m,
  },
  text: {
    marginHorizontal: hs(spacing.r),
  },
});
