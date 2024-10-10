import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, borderWidth, radius} = Styles;
export default StyleSheet.create({
  container: {
    marginHorizontal: hs(spacing.r),
    borderWidth: borderWidth.m,
    borderRadius: radius.s,
    height: vs(144),
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  left: {
    width: '65%',
    height: '100%',
    padding: hs(spacing.s),
    justifyContent: 'space-between',
  },
  right: {
    width: '35%',
    height: '100%',
    padding: hs(spacing.xs),
    alignItems: 'center',
    justifyContent: 'center',
  },
  termOfUser: {
    flex: 1,
    paddingHorizontal: hs(spacing.xs),
    paddingVertical: vs(spacing.xs),
  },
  title: {
    alignSelf: 'baseline',
    paddingHorizontal: hs(spacing.s),
    paddingVertical: vs(spacing.xxs),
    borderRadius: radius.xs,
  },
});
