import styles from './styles';

import React, {useReducer, useState} from 'react';
import {View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import TextInput, {inputReducer, TextInputStates} from '@/components/TextInput';
import Button from '@/components/Button';
import Text from '@/components/Text';
import PhoneInput from '@/components/PhoneInput';
import {useTheme} from '@/hooks/theme';
import {RootStackScreenProps} from '@/navigation';
import {delay} from '@/utils/helpers';

const states: TextInputStates = {
  email: {valid: false, value: ''},
  phone: {valid: false, value: ''},
};

const ForgotPassword = ({
  route: {params},
}: RootStackScreenProps<'ForgotPassword'>) => {
  const theme = useTheme();
  const [inputType, setInputType] = useState<'email' | 'phone'>('email');

  const [state, dispatch] = useReducer(inputReducer, states);
  const buttonDisabled =
    inputType === 'email' ? !state['email'].valid : !state['phone'].valid;

  const onSendLink = async () => {
    await delay(1500);
    console.debug('onSendLink');
  };

  const clearState = () => {
    dispatch({type: 'value', payload: {field: 'email', value: ''}});
    dispatch({type: 'valid', payload: {field: 'email', value: false}});
    dispatch({type: 'value', payload: {field: 'phone', value: ''}});
    dispatch({type: 'valid', payload: {field: 'phone', value: false}});
  };

  return (
    <PageWrapper removeTop>
      <PageHeader header="Forgot Password" />
      <View style={styles.container}>
        <Text.P style={styles.desc} color={theme.textSub} size={14}>
          Enter your email that you used to register your account, so we can
          send you a link to reset your password
        </Text.P>

        {inputType === 'email' ? (
          <TextInput
            keyboardType="email-address"
            validator="email"
            headingIcon="Mail"
            required
            placeholder="Email"
            title="Email"
            value={state['email'].value}
            onChangeText={e =>
              dispatch({type: 'value', payload: {field: 'email', value: e}})
            }
            errorText="Email format doğru değil"
            onValidationChanged={v =>
              dispatch({type: 'valid', payload: {field: 'email', value: v}})
            }
          />
        ) : (
          <PhoneInput
            required
            currentPage="ForgotPassword"
            country={params?.country}
            title="Phone"
            validator="mobilePhone"
            errorText="Format doğru değil"
            value={state['phone'].value}
            onChangeText={e =>
              dispatch({type: 'value', payload: {field: 'phone', value: e}})
            }
            onValidationChanged={v =>
              dispatch({type: 'valid', payload: {field: 'phone', value: v}})
            }
          />
        )}

        <View style={styles.button}>
          <Button
            onClick={onSendLink}
            disabled={buttonDisabled}
            text="Send link"
          />
        </View>

        <View style={[styles.line, {backgroundColor: theme.border}]} />

        <Text.H color={theme.textSub} style={styles.tryAnother}>
          Try another method?
          <Text.H
            onPress={() => {
              setInputType(prev => {
                clearState();
                if (prev === 'email') return 'phone';
                return 'email';
              });
            }}
            typography="semiBold"
            color={theme.textHighlighted}>
            {` ${inputType === 'email' ? 'Phone number' : 'Email'}`}
          </Text.H>
        </Text.H>
      </View>
    </PageWrapper>
  );
};

export default ForgotPassword;
