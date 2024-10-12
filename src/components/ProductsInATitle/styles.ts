import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing} = Styles;
export default StyleSheet.create({
  container: {},
  title: {
    marginHorizontal: hs(spacing.r),
    marginBottom: vs(spacing.xs),
  },
  flatList: {
    paddingHorizontal: hs(spacing.r),
  },
});
