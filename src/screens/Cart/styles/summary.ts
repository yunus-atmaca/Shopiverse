import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: vs(56),
  },
  content: {
    flex: 1,
    paddingHorizontal: hs(spacing.r),
    borderTopWidth: borderWidth.m,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    flex: 1.25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  approve: {
    marginStart: hs(36),
    marginEnd: 0,
  },
  details: {
    position: 'absolute',
    left: 0,
    bottom: vs(56),
    right: 0,
    height: vs(96),
    paddingHorizontal: hs(spacing.r),
    borderTopWidth: borderWidth.m,
    justifyContent: 'center',
  },
  section: {
    height: vs(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  separator: {
    height: borderWidth.m,
    marginVertical: vs(spacing.xs),
  },
});
