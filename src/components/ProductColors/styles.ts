import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, radius, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    marginTop: vs(spacing.xs),
  },
  colorContainer: {
    height: hs(36),
    width: hs(36),
    borderRadius: radius.s,
    borderWidth: borderWidth.m,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: hs(spacing.xs),
    marginTop: vs(spacing.xs),
  },
  color: {
    width: '80%',
    height: '80%',
    borderRadius: radius.s,
  },
});
