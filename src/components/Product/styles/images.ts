import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, radius} = Styles;
export default StyleSheet.create({
  img: {
    width: '100%',
    height: vs(108),
    resizeMode: 'contain',
    borderRadius: radius.xs,
  },
});
