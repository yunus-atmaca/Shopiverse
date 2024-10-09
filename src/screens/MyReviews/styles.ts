import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, spacing} = Styles;
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tags: {
    paddingTop: Styles.vs(spacing.s),
  },
});
