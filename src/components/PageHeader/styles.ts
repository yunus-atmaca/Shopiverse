import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing} = Styles;
export default StyleSheet.create({
  container: {
    paddingHorizontal: hs(spacing.r),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.75,
    elevation: 4,
  },
  content: {
    height: vs(56),
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    marginEnd: hs(spacing.m),
  },
});
