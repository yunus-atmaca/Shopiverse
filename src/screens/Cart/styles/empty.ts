import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing} = Styles;
export default StyleSheet.create({
  container: {
    marginVertical: vs(spacing.xxl),
    alignItems: 'center',
  },
  header: {
    marginTop: vs(spacing.r),
    marginBottom: vs(spacing.s),
  },
  desc: {
    marginHorizontal: hs(spacing.xl),
  },
  button: {
    marginTop: vs(spacing.xxl),
  },
});
