import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing} = Styles;
export default StyleSheet.create({
  country: {
    height: vs(40),
    paddingHorizontal: hs(spacing.r),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
