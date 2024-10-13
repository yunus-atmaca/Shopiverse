import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    paddingHorizontal: hs(spacing.r),
    borderTopWidth: borderWidth.m,
    borderBottomWidth: borderWidth.m,
    marginTop: vs(spacing.m),
    flexDirection: 'row',
    height: vs(160),
    alignItems: 'center',
  },
  image: {
    width: hs(96),
    height: vs(144),
  },
  info: {
    flex: 1,
    height: vs(144),
    paddingStart: hs(spacing.s),
  },
});
