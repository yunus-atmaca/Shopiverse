import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, spacing, vs, borderWidth, radius} = Styles;
export default StyleSheet.create({
  container: {
    width: hs(144),
    height: vs(200),
    paddingHorizontal: hs(spacing.xs),
    paddingVertical: vs(spacing.xs),
    backgroundColor: 'green',
    borderRadius: radius.xs,
    borderWidth: borderWidth.m,
  },
});
