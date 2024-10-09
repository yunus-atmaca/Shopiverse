import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing} = Styles;
export default StyleSheet.create({
  container: {},
  ms: {
    marginStart: hs(spacing.r),
  },
  mt: {
    marginTop: vs(spacing.m),
  },
});
