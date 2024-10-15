import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    marginTop: vs(spacing.s),
    borderTopWidth: borderWidth.m,
    borderBottomWidth: borderWidth.m,
    paddingHorizontal: hs(spacing.r),
    paddingVertical: vs(spacing.s),
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    marginStart: hs(spacing.s),
    paddingVertical: vs(spacing.xs),
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flex: 1,
  },
  img: {
    height: vs(108),
    width: hs(72),
  },
  texts: {
    opacity: 0,
    flex: 1,
    height: '100%',
    paddingHorizontal: hs(spacing.xs),
  },
});
