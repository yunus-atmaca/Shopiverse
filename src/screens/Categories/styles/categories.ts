import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, borderWidth, radius, device} = Styles;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  tags: {
    marginVertical: vs(spacing.m),
  },
  categoryContainer: {
    width: device.width / 2 - hs(spacing.r),
    //height: hs(108),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vs(spacing.m),
  },
  categoryContent: {
    height: hs(120),
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.s,
    borderWidth: borderWidth.m,
  },
  img: {
    width: hs(72),
    height: hs(72),
    resizeMode: 'contain',
  },
});
