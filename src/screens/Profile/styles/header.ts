import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing} = Styles;
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: hs(spacing.r),
    justifyContent: 'space-between',
    height: vs(64),
  },
});
