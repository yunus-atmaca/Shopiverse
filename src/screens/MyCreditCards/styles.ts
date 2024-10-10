import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, spacing} = Styles;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: vs(spacing.l),
    marginTop: vs(spacing.m),
  },
});
