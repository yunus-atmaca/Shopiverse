import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, spacing, hs} = Styles;
export default StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
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
