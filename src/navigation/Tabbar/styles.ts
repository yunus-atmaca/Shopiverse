import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    paddingHorizontal: hs(spacing.r),
    borderTopWidth: borderWidth.m,
  },
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    //paddingVertical: vs(spacing.s),
    paddingTop: vs(spacing.s),
    flex: 1,
  },
});
