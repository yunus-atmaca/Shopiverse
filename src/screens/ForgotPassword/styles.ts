import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  desc: {
    marginHorizontal: hs(spacing.r),
    marginVertical: vs(spacing.r),
  },
  button: {
    marginTop: vs(spacing.xxl),
  },
  line: {
    height: borderWidth.m,
    marginVertical: vs(spacing.r),
    marginHorizontal: hs(spacing.r),
  },
  tryAnother: {
    alignSelf: 'center',
  },
});
