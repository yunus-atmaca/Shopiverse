import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, spacing} = Styles;
export default StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.75,
    elevation: 4,
    zIndex: 4,
  },
});
