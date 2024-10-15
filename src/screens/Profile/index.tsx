import styles from './styles';
import profileSections from './sections';
import Section from './Section';
import Header from './Header';
import APP from '../../../app.json';

import React from 'react';
import {ScrollView, View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import Info from '@/components/Info';
import {useAppDispatch, useAppSelector} from '@/hooks/stores';
import {SelectAuth} from '@/stores/selectors';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import Button from '@/components/Button';
import {setUser} from '@/stores/controllers/auth';
import {Storage} from '@/utils';

const Profile = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const user = useAppSelector(SelectAuth.user);

  return (
    <PageWrapper removeBottom>
      {!user ? (
        <View style={[styles.container, styles.notLoggedIn]}>
          <Info
            icon="Login"
            title="My Account"
            desc="Please log in to view your account."
            navigateTo="Login"
            buttonText={'Login'}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Header fullName={user.firstName + ' ' + user.lastName} />
          <ScrollView
            contentContainerStyle={{paddingBottom: 36}}
            bounces={false}
            showsVerticalScrollIndicator={false}>
            {profileSections.map((section, index) => {
              return <Section key={'s-' + index} data={section} />;
            })}

            <Button
              onClick={() => {
                Storage.deleteKey(Storage.Keys.USER_DATA);
                dispatch(setUser(null));
              }}
              style={styles.logout}
              text="Log out"
            />

            <Text.H
              typography="bold"
              align="center"
              style={styles.app}
              color={theme.textHighlighted}>
              {APP.displayName + '\n'}
              <Text.P align="center" size={12}>
                {APP.version}
              </Text.P>
            </Text.H>
          </ScrollView>
        </View>
      )}
    </PageWrapper>
  );
};

export default Profile;
