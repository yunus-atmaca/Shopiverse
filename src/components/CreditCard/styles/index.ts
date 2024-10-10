import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, ms, borderWidth, spacing, radius} = Styles;
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: vs(16),
  },
  card: {
    backgroundColor: '#3BB0F7', //#F76378, #3E5574, #6FD5B2, #F6A131, #F0DF8B
    //backgroundColor:'white',

    borderRadius: radius.r,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.5,
    elevation: 8,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingHorizontal: hs(spacing.r),
    marginTop: vs(spacing.xl),
  },
  button: {
    paddingHorizontal: hs(spacing.s),
    paddingVertical: vs(spacing.xs),
    borderRadius: radius.xs,
    borderWidth: borderWidth.m,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 12,
  },
  input: {
    width: '100%',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: hs(spacing.s),
    //paddingVertical: vs(spacing.xs),
    height: vs(32),
    borderRadius: radius.xs,
    borderWidth: borderWidth.m,
    marginEnd: 12,
  },
});
