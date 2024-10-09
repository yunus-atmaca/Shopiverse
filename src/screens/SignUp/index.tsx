import styles from './styles';

import React, {useReducer} from 'react';
import {Image, ScrollView, View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import TextInput, {inputReducer, TextInputStates} from '@/components/TextInput';
import {navigationRef, RootStackScreenProps} from '@/navigation';
import PhoneInput from '@/components/PhoneInput';
import DateInput from '@/components/DateInput';
import Forms from '@/components/Forms';
import Button from '@/components/Button';
import {delay} from '@/utils/helpers';

const states: TextInputStates = {
  firstName: {valid: false, value: ''},
  lastName: {valid: false, value: ''},
  email: {valid: false, value: ''},
  phone: {valid: false, value: ''},
  password: {valid: false, value: ''},
  //birthDate: {valid: true, value: ''},
  termsAndPrivacy: {valid: false, value: ''},
  policy: {valid: false, value: ''},
};

const SignUp = ({route: {params}}: RootStackScreenProps<'SignUp'>) => {
  const theme = useTheme();

  const [state, dispatch] = useReducer(inputReducer, states);
  const buttonDisabled =
    !state['firstName'].valid ||
    !state['lastName'].valid ||
    !state['email'].valid ||
    !state['phone'].valid ||
    !state['termsAndPrivacy'].valid ||
    !state['policy'].valid;

  /*console.debug(
    state['firstName'].valid,
    state['lastName'].valid,
    state['email'].valid,
    state['phone'].valid,
    state['termsAndPrivacy'].valid,
    state['policy'].valid,
  );*/

  const onSignUp = async () => {
    await delay(2000);
    navigationRef.goBack();
  };

  return (
    <PageWrapper removeTop>
      <PageHeader header="Sign Up" />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={require('@/assets/images/app_icon_trasparent_background.png')}
            style={styles.logo}
          />
          {/*<Text.H
            style={styles.title}
            align="center"
            typography="bold"
            size={24}>
            Create your account
          </Text.H>*/}
          {/*<Text.P color={theme.textSub} style={styles.desc} size={12}>
            Enter your information
          </Text.P>*/}

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1}}>
              <TextInput
                required
                validator="minimum2Char"
                title="FirstName"
                value={state['firstName'].value}
                errorText="Minimum 2 char"
                onChangeText={e =>
                  dispatch({
                    type: 'value',
                    payload: {field: 'firstName', value: e},
                  })
                }
                onValidationChanged={v =>
                  dispatch({
                    type: 'valid',
                    payload: {field: 'firstName', value: v},
                  })
                }
              />
            </View>
            <View style={{flex: 1}}>
              <TextInput
                required
                title="LastName"
                validator="minimum2Char"
                value={state['lastName'].value}
                errorText="Minimum 2 char"
                onChangeText={e =>
                  dispatch({
                    type: 'value',
                    payload: {field: 'lastName', value: e},
                  })
                }
                onValidationChanged={v =>
                  dispatch({
                    type: 'valid',
                    payload: {field: 'lastName', value: v},
                  })
                }
              />
            </View>
          </View>

          <View style={styles.field}>
            <TextInput
              validator="email"
              keyboardType="email-address"
              required
              headingIcon="Mail"
              placeholder="Email"
              title="Email"
              value={state['email'].value}
              errorText="Email format doğru değil"
              onChangeText={e =>
                dispatch({type: 'value', payload: {field: 'email', value: e}})
              }
              onValidationChanged={v =>
                dispatch({type: 'valid', payload: {field: 'email', value: v}})
              }
            />
          </View>
          <View style={styles.field}>
            <PhoneInput
              required
              currentPage="SignUp"
              country={params?.country}
              title="Phone"
              value={state['phone'].value}
              validator="mobilePhone"
              errorText="Format doğru değil"
              onChangeText={e =>
                dispatch({type: 'value', payload: {field: 'phone', value: e}})
              }
              onValidationChanged={v =>
                dispatch({type: 'valid', payload: {field: 'phone', value: v}})
              }
            />
          </View>

          <View style={styles.field}>
            <TextInput
              required
              headingIcon="Lock"
              placeholder="Password"
              secureTextEntry
              title="Password"
              errorText="Minimum 8 char"
              validator="minimum8Char"
              value={state['password'].value}
              onValidationChanged={v =>
                dispatch({
                  type: 'valid',
                  payload: {field: 'password', value: v},
                })
              }
              onChangeText={e =>
                dispatch({
                  type: 'value',
                  payload: {field: 'password', value: e},
                })
              }
            />
          </View>

          <View style={styles.field}>
            <DateInput title="Birth Date" />
          </View>

          <View style={[styles.field, styles['mt-12']]}>
            <Forms.Agreement
              checked={state['termsAndPrivacy'].valid}
              onValueChange={() => {
                dispatch({
                  type: 'valid',
                  payload: {
                    field: 'termsAndPrivacy',
                    value: !state['termsAndPrivacy'].valid,
                  },
                });
              }}
              agreementText="I agree with **Terms** and **Privacy**"
              urls={['https://reactnative.dev/', 'https://reactnative.dev/']}
            />
          </View>

          <View style={[styles.field, styles['mt-6']]}>
            <Forms.Agreement
              checked={state['policy'].valid}
              onValueChange={() => {
                dispatch({
                  type: 'valid',
                  payload: {
                    field: 'policy',
                    value: !state['policy'].valid,
                  },
                });
              }}
              agreementText="I agree with **Policy**"
              urls={['https://reactnative.dev/']}
            />
          </View>

          <View style={[styles.field, styles['mt-12']]}>
            <Button
              onClick={onSignUp}
              disabled={buttonDisabled}
              text={'Sign Up'}
            />
          </View>

          <Text.H color={theme.textSub} style={{marginTop: 8}}>
            Already have an account?
            <Text.H
              onPress={() => navigationRef.navigate('Login')}
              typography="semiBold"
              color={theme.textActive}>
              {' '}
              Login
            </Text.H>
          </Text.H>
        </View>
      </ScrollView>
    </PageWrapper>
  );
};

export default SignUp;
