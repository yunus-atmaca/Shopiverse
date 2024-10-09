import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    width: '100%',
  },
  item: {
    borderBottomWidth: borderWidth.m,
    width: '100%',
    overflow:'hidden'
  },
  trigger: {
    paddingHorizontal: hs(spacing.r),
    height: vs(48),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: vs(56),
  },
});
