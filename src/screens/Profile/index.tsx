import styles from './styles';

import APP from '../../../app.json';

import React, {useEffect, useMemo} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {navigationRef} from '@/navigation';
import PageWrapper from '@/components/PageWrapper';
import Info from '@/components/Info';
import {useAppDispatch, useAppSelector} from '@/hooks/stores';
import {SelectAuth} from '@/stores/selectors';
import Icon from '@/components/Icon';
import Text from '@/components/Text';
import {ISection} from '@/types/utils/Items';
import {useTheme} from '@/hooks/theme';
import Button from '@/components/Button';

const Profile = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const isFocused = useIsFocused();
  const user = useAppSelector(SelectAuth.user);

  const sections = useMemo<ISection[]>(() => {
    return [
      {
        id: '1',
        title: '',
        options: [
          {id: '11', name: 'My Orders', icon: 'Box'},
          {id: '12', name: 'My Reviews', icon: 'CommentDots'},
        ],
      },
      {
        id: '2',
        title: 'Account',
        options: [
          {id: '21', name: 'My User Information', icon: 'User'},
          {id: '22', name: 'My Addresses', icon: 'Location'},
          {id: '23', name: 'My Coupons', icon: 'Coupon'},
          {id: '24', name: 'My Saved Credit Cards', icon: 'CreditCard'},
        ],
      },
      {
        id: '3',
        title: 'Agreements',
        options: [
          {id: '33', name: 'Terms and Conditions', icon: undefined},
          {id: '34', name: 'Our Policy', icon: undefined},
        ],
      },
      {
        id: '4',
        title: 'Help',
        options: [
          {id: '41', name: 'Frequently Asked Questions', icon: 'QuestionMark'},
          {id: '42', name: 'Customer Services', icon: 'CustomerService'},
        ],
      },
    ];
  }, []);

  useEffect(() => {
    if (isFocused && !user) {
      //navigationRef.navigate('Login');
    }
    navigationRef.getCurrentRoute();
  }, [isFocused, user]);

  const onOption = (sectionId: string, optionId: string) => {
    if (sectionId === '1') {
      if (optionId == '11') navigationRef.navigate('MyOrders');
      else if (optionId === '12') navigationRef.navigate('MyReviews');
    } else if (sectionId === '2') {
    } else if (sectionId === '3') {
      navigationRef.navigate('ModalWebview', {url: 'https://reactnative.dev/'});
    } else {
    }
  };

  return (
    <PageWrapper removeBottom>
      {!user ? (
        <View style={[styles.container, styles.notLoggedIn]}>
          <Info
            icon="Login"
            title="Hesabım"
            desc="Hesabınızı görüntülüyebilmek için lütfen giriş yapın."
            navigateTo="Login"
            buttonText={'Giriş Yap'}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={[styles.header]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon containerSize={48} name="Person" />
              <Text.H style={{marginStart: 8}} typography="semiBold">
                {user.firstName + ' ' + user.lastName}
              </Text.H>
            </View>
            <Icon name="Notification" />
          </View>
          <ScrollView
            contentContainerStyle={{paddingBottom: 36}}
            bounces={false}
            showsVerticalScrollIndicator={false}>
            {sections.map((s, is) => {
              return (
                <View key={'section-' + is} style={styles.section}>
                  {s.title && (
                    <Text.H
                      style={styles.title}
                      size={14}
                      typography="semiBold">
                      {s.title}
                    </Text.H>
                  )}
                  <View
                    style={[
                      styles.sectionContent,
                      {
                        backgroundColor: theme.boxBG,
                        borderColor: theme.border,
                      },
                    ]}>
                    {s.options.map((o, io) => {
                      return (
                        <TouchableOpacity
                          onPress={() => onOption(s.id, o.id)}
                          activeOpacity={0.7}
                          style={styles.option}
                          key={'option-' + io}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            {o.icon && (
                              <Icon
                                color={theme.iconHighlighted}
                                name={o.icon}
                              />
                            )}
                            <Text.P style={{marginStart: 8}}>{o.name}</Text.P>
                          </View>
                          <Icon color={theme.iconBG} name={'ArrowRight'} />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              );
            })}

            <Button
              onClick={async () => {}}
              style={styles.logout}
              text="Log out"
            />

            <Text.H align="center" style={styles.app} color={theme.iconLight}>
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
