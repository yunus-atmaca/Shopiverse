import styles from './styles';

import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';

import PageHeader from '@/components/PageHeader';
import PageWrapper from '@/components/PageWrapper';
import Info from '@/components/Info';
import {IAddress} from '@/types/utils/Info';
import {Storage} from '@/utils';
import Button from '@/components/Button';
import {navigationRef} from '@/navigation';
import {useAddresses} from '@/hooks/user';
import Address from '@/components/Address';

const MyAddresses = () => {
  const {addresses, setAddresses} = useAddresses();

  const onDelete = (address: IAddress) => {
    if (addresses) {
      const filtered = addresses.filter(a => a.id !== address.id);
      Storage.set(Storage.Keys.USER_ADDRESS, filtered);
      setAddresses(filtered);
    }
  };

  const renderAddress: ListRenderItem<IAddress> = ({item}) => {
    return <Address data={item} onDelete={onDelete} />;
  };

  return (
    <PageWrapper removeTop>
      <PageHeader header="My Addresses" />
      {addresses && addresses.length === 0 && (
        <View style={[styles.container, styles.empty]}>
          <Info
            icon="Location"
            title="There Is No registered Address"
            desc="You can add your order delivery address here"
            navigateTo="AddAddress"
            buttonText={'Add Address'}
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
              navigationRef.navigate('AddAddress', {address: undefined});
            }}
            text="Add New Address"
          />
        </View>
      )}
    </PageWrapper>
  );
};

export default MyAddresses;
