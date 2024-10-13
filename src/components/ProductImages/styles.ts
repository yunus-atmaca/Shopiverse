import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, radius} = Styles;
export default StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
    //resizeMode: 'contain',
    borderRadius: radius.xs,
  },
  indicatorsContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: vs(4),
    height: vs(12),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: hs(spacing.xs),
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
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  indicator: {
    height: vs(6),
    width: vs(6),
    borderRadius: radius.c,
    marginEnd: hs(4),
  },
});
