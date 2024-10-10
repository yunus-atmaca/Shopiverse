import styles from './styles';

import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';

import PageHeader from '@/components/PageHeader';
import PageWrapper from '@/components/PageWrapper';
import Info from '@/components/Info';
import {useIsFocused} from '@react-navigation/native';
import {IAddress} from '@/types/utils/Info';
import {Storage} from '@/utils';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import Button from '@/components/Button';
import {navigationRef} from '@/navigation';
import ButtonBaseLine from '@/components/ButtonBaseLine';

const MyAddresses = () => {
  const theme = useTheme();

  const isFocused = useIsFocused();
  const [addresses, setAddresses] = useState<IAddress[]>();

  const fetchAddress = useCallback(async () => {
    const addresses = await Storage.get(Storage.Keys.USER_ADDRESS);
    setAddresses(addresses ?? []);
  }, []);

  useEffect(() => {
    if (isFocused) fetchAddress();
  }, [isFocused]);

  const renderAddress: ListRenderItem<IAddress> = ({item}) => {
    return (
      <View
        style={[
          styles.address,
          {
            backgroundColor: theme.boxBG,
            borderColor: theme.borderLight,
          },
        ]}>
        <Text.P size={14}>{item.fullName}</Text.P>
        <Text.P color={theme.textSub} size={12}>
          {item.phone}
        </Text.P>

        <Text.P style={{marginTop: 8}} color={theme.textSub} size={12}>
          {item.line1 + '\n' + item.line2}
        </Text.P>
        <Text.P size={14}>
          {item.district + '/' + item.province + '  ' + item.postalCode}
        </Text.P>

        <View style={styles.icons}>
          <ButtonBaseLine
            containerStyle={{borderWidth: 0}}
            icon="Edit"
            text="Edit"
            onClick={() => {
              navigationRef.navigate('AddAddress', {address: item});
            }}
          />

          <ButtonBaseLine
            containerStyle={{borderWidth: 0}}
            icon="Delete"
            iconColor={theme.iconError}
            text="Delete"
            onClick={() => {
              if (addresses) {
                const filtered = addresses.filter(a => a.id !== item.id);
                Storage.set(Storage.Keys.USER_ADDRESS, filtered);
                setAddresses(filtered);
              }
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <PageWrapper removeTop>
      <PageHeader header="My Addresses" />
      {addresses && addresses.length === 0 && (
        <View style={[styles.container, styles.empty]}>
          <Info
            icon="Location"
            title="Kayitli Adresin Bulunmamaktadir"
            desc="Siparis teslim adresini buradan ekleyebilirsin"
            navigateTo="AddAddress"
            buttonText={'Adres Ekle'}
          />
        </View>
      )}

      {addresses && addresses.length > 0 && (
        <View style={{flex: 1}}>
          <FlatList
            data={addresses}
            renderItem={renderAddress}
            keyExtractor={(_, i) => 'address' + i}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      {addresses && addresses.length > 0 && (
        <View style={styles.button}>
          <Button
            onClick={() => {
              //Storage.deleteKey(Storage.Keys.USER_ADDRESS);
              navigationRef.navigate('AddAddress', {address: undefined});
            }}
            text="Yeni Adres Ekle"
          />
        </View>
      )}
    </PageWrapper>
  );
};

export default MyAddresses;
