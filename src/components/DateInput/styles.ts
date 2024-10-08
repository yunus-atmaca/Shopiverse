import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing, radius, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    marginHorizontal: hs(spacing.r),
  },
  title: {
    marginBottom: vs(spacing.xs),
  },
  inputContainer: {
    height: vs(44),
    borderRadius: radius.xs,
    borderWidth: borderWidth.m,
    paddingHorizontal: hs(spacing.m),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconHeading: {
    marginEnd: hs(spacing.s),
  },
  iconEnding: {
    marginStart: hs(spacing.s),
  },
  input: {
    paddingVertical: 0,
    flex: 1,
    height: '80%',
    fontSize: hs(16),
  },
});
