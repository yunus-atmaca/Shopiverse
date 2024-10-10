import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing, radius, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  notLoggedIn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: hs(spacing.r),
    justifyContent: 'space-between',
    height: vs(64),
  },
  app: {
    marginTop: vs(spacing.xxl),
    alignSelf: 'center',
  },
  logout: {
    marginTop: vs(spacing.xl),
  },
});
