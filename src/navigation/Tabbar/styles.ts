import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, hs, spacing, radius} = Styles;
export default StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  tabs: {
    backgroundColor: 'gray',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
