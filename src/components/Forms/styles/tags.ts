import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, radius, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    paddingHorizontal: hs(spacing.m),
    paddingVertical: vs(spacing.xs),
    borderRadius: radius.xs,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: borderWidth.m,
  },
});
