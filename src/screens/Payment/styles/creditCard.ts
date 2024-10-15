import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    paddingHorizontal: hs(spacing.r),
    paddingVertical: vs(spacing.s),
    borderTopWidth: borderWidth.m,
    borderBottomWidth: borderWidth.m,
    marginTop: vs(spacing.r),
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vs(spacing.s),
  },
  texts: {
    flex: 1,
    marginStart: hs(spacing.s),
  },
});
