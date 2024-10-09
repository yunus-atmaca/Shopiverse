import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {vs, spacing, hs} = Styles;
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    //backgroundColor: 'white',
    paddingTop: vs(spacing.s),
  },
});
