import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, radius, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: hs(128),
    height: hs(128),
    resizeMode: 'contain',
  },
  title: {
    marginHorizontal: hs(spacing.xxl),
  },
  desc: {
    marginBottom: vs(spacing.xl),
  },
  field: {
    width: '100%',
  },
  'mt-12': {
    marginTop: vs(spacing.m),
  },
  'mt-6': {
    marginTop: vs(spacing.xs),
  },
});
