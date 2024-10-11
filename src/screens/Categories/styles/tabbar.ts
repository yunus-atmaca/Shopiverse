import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, spacing, radius, hs, device, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    //paddingHorizontal: hs()
    //paddingVertical: hs(spacing.xs),
    borderBottomWidth: borderWidth.m,
  },
  content: {
    height: vs(56),
  },
  scrollView: {
    paddingHorizontal: hs(spacing.r),
    alignItems: 'center',
  },
  tab: {
    maxWidth: device.width * 0.4,
    marginEnd: hs(spacing.m),
    paddingHorizontal: hs(spacing.s),
    borderWidth: borderWidth.m,
    paddingVertical: vs(spacing.xxs),
    borderRadius: radius.xs,
  },
});
