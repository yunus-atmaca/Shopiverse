import styles from './styles';

import React, {useMemo} from 'react';
import {View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import TextInput from '@/components/TextInput';
import Form from '@/components/Forms';
import {IOption} from '@/types/utils/Items';
import Info from '@/components/Info';

const MyOrders = () => {
  const tags = useMemo<IOption[]>(() => {
    return [
      {id: '1', name: 'All'},
      {id: '2', name: 'Ongoing'},
      {id: '3', name: 'Canceled'},
      {id: '4', name: 'Returned'},
    ];
  }, []);

  return (
    <PageWrapper removeTop>
      <PageHeader header="My Orders" />
      <View style={styles.searchBox}>
        <TextInput placeholder="Search products" headingIcon="Search" />
      </View>
      <Form.Tags tags={tags} />
      <View style={styles.container}>
        <Info
          icon="Box"
          title="Şiparişiniz Bulunamadı"
          desc="Şuanda şiparişiniz bulunmamaktadır."
          navigateTo="Profile"
          buttonText={'Alışverişe Devam Et'}
        />
      </View>
    </PageWrapper>
  );
};

export default MyOrders;
