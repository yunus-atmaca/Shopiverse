import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, radius, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    //alignSelf: 'baseline',
    paddingHorizontal: hs(spacing.s),
    height: vs(32),
    borderRadius: radius.xs,
    borderWidth: borderWidth.m,
  },
});
