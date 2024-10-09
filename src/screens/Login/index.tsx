import styles from './styles';

import React, {useReducer} from 'react';
import {View, Image} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import Text from '@/components/Text';
import TextInput, {inputReducer, TextInputStates} from '@/components/TextInput';

import Button from '@/components/Button';
import {useTheme} from '@/hooks/theme';
import Icon from '@/components/Icon';
import {navigationRef} from '@/navigation';
import {useAppDispatch} from '@/hooks/stores';
import {setUser} from '@/stores/controllers/auth';
import {delay} from '@/utils/helpers';

const states: TextInputStates = {
  email: {valid: false, value: ''},
  password: {valid: false, value: ''},
};

const Login = () => {
  const theme = useTheme();
  const appDispatch = useAppDispatch();

  const [state, dispatch] = useReducer(inputReducer, states);
  const buttonDisabled = !state['email'].valid || !state['password'].valid;

  const onLogin = async () => {
    await delay(2500);

    appDispatch(
      setUser({
        firstName: 'Yunus',
        lastName: 'ATMACA',
        id: 'User-ID',
        email: 'yunusatmacabm@gmail.com',
      }),
    );

    navigationRef.goBack();
  };

  const onGoogle = () => {
    console.debug('Google login');
  };
  const onFacebook = () => {
    console.debug('Facebook login');
  };
  const onApple = () => {
    console.debug('Apple Login');
  };

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
          <TextInput
            required
            validator="email"
            keyboardType="email-address"
            placeholder="Email"
            headingIcon="Mail"
            title={'Email'}
            value={state['email'].value}
            onChangeText={e =>
              dispatch({type: 'value', payload: {field: 'email', value: e}})
            }
            errorText="Email format doğru değil"
            onValidationChanged={v =>
              dispatch({type: 'valid', payload: {field: 'email', value: v}})
            }
          />
        </View>

        <View style={{width: '100%'}}>
          <TextInput
            required
            placeholder="Password"
            value={state['password'].value}
            onChangeText={e =>
              dispatch({type: 'value', payload: {field: 'password', value: e}})
            }
            validator="minimum8Char"
            onValidationChanged={v =>
              dispatch({type: 'valid', payload: {field: 'password', value: v}})
            }
            headingIcon="Lock"
            title={'Password'}
            secureTextEntry
            errorText="Minimum 8 char"
          />
        </View>
        <Text.H
          onPress={() =>
            navigationRef.navigate('ForgotPassword', {country: undefined})
          }
          typography="semiBold"
          color={theme.textHighlighted}
          style={styles.forgotPassword}>
          Şifremi Unuttum
        </Text.H>

        <View style={styles.login}>
          <Button onClick={onLogin} text="Login" disabled={buttonDisabled} />
        </View>

        <View style={styles.loginWith}>
          <View style={[styles.line, {backgroundColor: theme.border}]} />
          <Text.H size={14}>Or</Text.H>
          <View style={[styles.line, {backgroundColor: theme.border}]} />
        </View>

        <View style={styles.social}>
          <Icon
            onClick={onGoogle}
            containerStyle={styles.socialIcon}
            name="Google"
          />
          <Icon
            onClick={onApple}
            containerStyle={[styles.socialIcon, {marginHorizontal: 24}]}
            name="Apple"
          />
          <Icon
            onClick={onFacebook}
            containerStyle={styles.socialIcon}
            name="Facebook"
          />
        </View>

        <Text.H color={theme.textSub} style={styles.signUp}>
          Dont have account?
          <Text.H
            onPress={() =>
              navigationRef.navigate('SignUp', {country: undefined})
            }
            typography="semiBold"
            color={theme.textHighlighted}>
            {' '}
            Sign Up
          </Text.H>
        </Text.H>
      </View>
    </PageWrapper>
  );
};

export default Login;
