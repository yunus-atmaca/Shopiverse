import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing, radius, device} = Styles;
export default StyleSheet.create({
  banner: {
    height: vs(200),
    width: device.width,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    paddingHorizontal: hs(spacing.r),
    paddingVertical: vs(spacing.m),
  },
  top: {
    width: '100%',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  indicator: {
    position: 'absolute',
    left: hs(spacing.r),
    bottom: vs(spacing.m),
    height: hs(24),
    width: hs(36),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.s,
  },
});
