import {StyleSheet} from 'react-native';
import Styles from '@/theme/style';

const {hs, vs, spacing, radius, borderWidth} = Styles;
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: hs(128),
    height: hs(128),
    resizeMode: 'contain',
  },
  title: {
    marginHorizontal: hs(spacing.xxl),
  },
  desc: {
    marginBottom: vs(spacing.xl),
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginEnd: hs(spacing.r),
  },
  login: {
    marginTop: vs(spacing.r),
    width: '100%',
  },
  loginWith: {
    width: '100%',
    paddingHorizontal: hs(spacing.r),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vs(spacing.r),
    justifyContent: 'space-between',
  },
  line: {
    width: '35%',
    height: borderWidth.m,
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vs(spacing.r),
  },
  socialIcon: {
    height: vs(48),
    width: hs(72),
    borderRadius: radius.xs,
  },
  signUp: {
    marginTop: vs(spacing.xxl),
  },
});
