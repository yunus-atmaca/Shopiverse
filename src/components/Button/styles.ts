import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing, radius} = Styles;
export default StyleSheet.create({
  container: {
    height: vs(40),
    backgroundColor: 'green',
    marginHorizontal: hs(spacing.r),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.s,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.75,

    elevation: 4,
  },
});
