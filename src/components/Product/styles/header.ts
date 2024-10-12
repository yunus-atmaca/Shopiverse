import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, radius} = Styles;
export default StyleSheet.create({
  favorite: {
    position: 'absolute',
    right: hs(spacing.xs),
    top: hs(spacing.xs),
  },
  rate: {
    position: 'absolute',
    left: hs(spacing.s),
    top: hs(spacing.s),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: hs(spacing.s),
    paddingVertical: vs(spacing.xxs),
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
});
