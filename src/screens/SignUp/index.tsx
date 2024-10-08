import styles from './styles';

import React from 'react';
import {Image, ScrollView, View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import TextInput from '@/components/TextInput';
import {navigationRef, RootStackScreenProps} from '@/navigation';
import PhoneInput from '@/components/PhoneInput';
import DateInput from '@/components/DateInput';
import Forms from '@/components/Forms';
import Button from '@/components/Button';

const SignUp = ({route: {params}}: RootStackScreenProps<'SignUp'>) => {
  const theme = useTheme();

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
              <TextInput title="FirstName" />
            </View>
            <View style={{flex: 1}}>
              <TextInput title="LastName" />
            </View>
          </View>

          <View style={styles.field}>
            <TextInput headingIcon="Mail" placeholder="Email" title="Email" />
          </View>

          <View style={styles.field}>
            <PhoneInput
              currentPage="SignUp"
              country={params?.country}
              title="Phone"
            />
          </View>

          <View style={styles.field}>
            <TextInput
              headingIcon="Lock"
              placeholder="Password"
              secureTextEntry
              title="Password"
            />
          </View>

          <View style={styles.field}>
            <DateInput title="Birth Date" />
          </View>

          <View style={styles.field}>
            <Forms.Agreement
              agreementText="I agree with **Terms** and **Privacy**"
              urls={['https://reactnative.dev/', 'https://reactnative.dev/']}
            />
          </View>

          <View style={styles.field}>
            <Forms.Agreement
              agreementText="I agree with **Policy**"
              urls={['https://reactnative.dev/']}
            />
          </View>

          <View style={styles.field}>
            <Button text={'Sign Up'} />
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
