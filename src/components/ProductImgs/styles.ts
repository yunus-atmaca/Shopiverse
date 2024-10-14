import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, radius} = Styles;
export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: vs(spacing.m),
    height: vs(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicators: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: hs(spacing.xs),
    borderRadius: radius.c,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },
  indicatorContainer: {
    width: hs(16),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    height: vs(6),
    width: vs(6),
    borderRadius: radius.c,
  },
  animated: {
    position: 'absolute',
    left: hs(spacing.xs),
    top: 0,
    width: hs(16),
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
