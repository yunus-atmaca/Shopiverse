import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, radius} = Styles;
export default StyleSheet.create({
  container: {
    paddingHorizontal: hs(spacing.r),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
