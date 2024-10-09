import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, spacing} = Styles;
export default StyleSheet.create({
  container: {
    paddingHorizontal: hs(spacing.r),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
