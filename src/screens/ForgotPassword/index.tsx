import styles from './styles';

import React, {useState} from 'react';
import {View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import Text from '@/components/Text';
import PhoneInput from '@/components/PhoneInput';
import {useTheme} from '@/hooks/theme';
import {RootStackScreenProps} from '@/navigation';

const ForgotPassword = ({
  route: {params},
}: RootStackScreenProps<'ForgotPassword'>) => {
  const theme = useTheme();
  const [inputType, setInputType] = useState<'email' | 'phone'>('email');

  return (
    <PageWrapper removeTop>
      <PageHeader header="Forgot Password" />
      <View style={styles.container}>
        <Text.P style={styles.desc} color={theme.textSub} size={14}>
          Enter your email that you used to register your account, so we can
          send you a link to reset your password
        </Text.P>

        {inputType === 'email' ? (
          <TextInput placeholder="Email" title="Email" />
        ) : (
          <PhoneInput country={params?.country} title="Phone" />
        )}

        <View style={styles.button}>
          <Button text="Send link" />
        </View>

        <View style={[styles.line, {backgroundColor: theme.line}]} />

        <Text.H color={theme.textSub} style={styles.tryAnother}>
          Try another method?
          <Text.H
            onPress={() => {
              setInputType(prev => {
                if (prev === 'email') return 'phone';
                return 'email';
              });
            }}
            typography="semiBold"
            color={theme.textActive}>
            {` ${inputType === 'email' ? 'Phone number' : 'Email'}`}
          </Text.H>
        </Text.H>
      </View>
    </PageWrapper>
  );
};

export default ForgotPassword;
