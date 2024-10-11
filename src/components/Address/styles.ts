import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing, radius, borderWidth} = Styles;
export default StyleSheet.create({
  address: {
    marginTop: vs(spacing.m),
    borderRadius: radius.m,
    borderWidth: borderWidth.m,
    padding: hs(spacing.m),
    marginHorizontal: hs(spacing.r),
  },
  button: {
    marginBottom: vs(spacing.l),
    marginTop: vs(spacing.m),
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: hs(spacing.s),
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
