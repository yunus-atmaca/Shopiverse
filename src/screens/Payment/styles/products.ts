import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    paddingHorizontal: hs(spacing.r),
    paddingVertical: vs(spacing.s),
    borderTopWidth: borderWidth.m,
    borderBottomWidth: borderWidth.m,
    marginTop: vs(spacing.r),
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: vs(spacing.s),
  },
  title: {
    width: '70%',
  },
  price: {
    width: '30%',
    alignItems: 'flex-end',
  },
});
