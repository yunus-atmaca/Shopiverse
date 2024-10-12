import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, spacing} = Styles;
export default StyleSheet.create({
  favorite: {
    position: 'absolute',
    right: hs(spacing.xs),
    top: hs(spacing.xs),
  },
  rate: {
    position: 'absolute',
    left: hs(spacing.xs),
    top: hs(spacing.xs),
  },
});
