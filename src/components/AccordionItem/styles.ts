import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing} = Styles;
export const ITEM_HEIGHT = Styles.vs(40);
export default StyleSheet.create({
  container: {
    width: '100%',
  },
  item: {
    width: '100%',
    overflow: 'hidden',
  },
  trigger: {
    paddingHorizontal: hs(spacing.r),
    height: ITEM_HEIGHT,
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
