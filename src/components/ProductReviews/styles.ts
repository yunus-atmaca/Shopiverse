import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, borderWidth, spacing} = Styles;
export default StyleSheet.create({
  container: {
    marginTop: vs(spacing.s),
    paddingVertical: vs(spacing.s),
    borderTopWidth: borderWidth.m,
    borderBottomWidth: borderWidth.m,
  },
  title: {
    height: vs(36),
    justifyContent: 'center',
    borderBottomWidth: borderWidth.m,
    paddingHorizontal: hs(spacing.r),
  },
  review: {
    paddingHorizontal: hs(spacing.r),
    borderBottomWidth: borderWidth.m,
    paddingVertical: vs(spacing.s),
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAll: {
    marginTop: vs(spacing.r),
  },
});
