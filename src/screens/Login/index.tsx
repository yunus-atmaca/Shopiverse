import styles from './styles';

import React from 'react';
import {View, Image} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import Text from '@/components/Text';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import {useTheme} from '@/hooks/theme';
import Icon from '@/components/Icon';

const Login = () => {
  const theme = useTheme();

  return (
    <PageWrapper removeTop>
      <PageHeader header="Login" />
      <View style={styles.container}>
        <Image
          source={require('@/assets/images/app_icon_trasparent_background.png')}
          style={styles.logo}
        />
        <Text.H style={styles.title} align="center" typography="bold" size={24}>
          Sign in to your account
        </Text.H>
        <Text.P color={theme.textSub} style={styles.desc} size={12}>
          Enter your email and password to login
        </Text.P>

        <View style={{width: '100%'}}>
          <TextInput placeholder="Email" headingIcon="Mail" title={'Email'} />
        </View>

        <View style={{width: '100%', marginTop: 10}}>
          <TextInput
            placeholder="Password"
            headingIcon="Lock"
            title={'Password'}
            secureTextEntry
          />
        </View>
        <Text.H color={theme.textActive} style={styles.forgotPassword}>
          Şifremi Unuttum
        </Text.H>

        <View style={styles.login}>
          <Button />
        </View>

        <View style={styles.loginWith}>
          <View style={[styles.line, {backgroundColor: theme.inputBorder}]} />
          <Text.H size={14}>Or</Text.H>
          <View style={[styles.line, {backgroundColor: theme.inputBorder}]} />
        </View>

        <View style={styles.social}>
          <Icon containerStyle={styles.socialIcon} name="Google" />
          <Icon
            containerStyle={[styles.socialIcon, {marginHorizontal: 24}]}
            name="Apple"
          />
          <Icon containerStyle={styles.socialIcon} name="Facebook" />
        </View>

        <Text.H color={theme.textSub} style={styles.signUp}>
          Dont have account?
          <Text.H typography="semiBold" color={theme.textActive}>
            {' '}
            Sign Up
          </Text.H>
        </Text.H>
      </View>
    </PageWrapper>
  );
};

export default Login;
