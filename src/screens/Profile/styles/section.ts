import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing, radius, borderWidth} = Styles;
export default StyleSheet.create({
  section: {
    paddingHorizontal: hs(spacing.r),
    marginTop: vs(spacing.s),
  },
  sectionContent: {
    paddingHorizontal: hs(spacing.m),
    borderRadius: radius.m,
    borderWidth: borderWidth.m,
  },
  title: {
    marginBottom: vs(spacing.s),
  },
  option: {
    height: vs(44),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
