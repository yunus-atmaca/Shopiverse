import styles from './styles';
import _orders from '@/data/orders';

import React, {useMemo, useState} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import TextInput from '@/components/TextInput';
import Form from '@/components/Forms';
import {IOption} from '@/types/utils/ComponentData';
import Info from '@/components/Info';
import Order from '@/components/Order';
import {IOrder, OrderStatus} from '@/types/utils/Info';

const MyOrders = () => {
  const [orders, setOrders] = useState(_orders);

  const tags = useMemo<IOption[]>(() => {
    return [
      {id: '1', name: 'All'},
      {id: '2', name: 'Completed'},
      {id: '3', name: 'Ongoing'},
      {id: '4', name: 'Canceled'},
      {id: '5', name: 'Returned'},
    ];
  }, []);

  const renderOrder: ListRenderItem<IOrder> = ({item}) => {
    return <Order data={item} />;
  };

  const onTag = (id: string) => {
    if (id === '1') setOrders(_orders);
    else {
      let filter: OrderStatus = 'Completed';
      if (id === '3') filter = 'Ongoing';
      else if (id === '4') filter = 'Canceled';
      else if (id === '5') filter = 'Returned';

      setOrders(_orders.filter(o => o.status === filter));
    }
  };

  return (
    <PageWrapper removeTop>
      <PageHeader header="My Orders" />
      <View style={styles.searchBox}>
        <TextInput placeholder="Search products" headingIcon="Search" />
      </View>
      <View style={{paddingBottom: 6}}>
        <Form.Tags onTag={onTag} tags={tags} />
      </View>

      {orders.length > 0 && (
        <FlatList
          contentContainerStyle={{paddingBottom: 32}}
          showsVerticalScrollIndicator={false}
          renderItem={renderOrder}
          data={orders}
          keyExtractor={(_, i) => 'order-' + i}
        />
      )}
      {orders.length === 0 && (
        <View style={styles.container}>
          <Info
            icon="Box"
            title="There Is No Order"
            desc="You currently have no orders."
            navigateTo="Profile"
            buttonText={'Start Shopping'}
          />
        </View>
      )}
    </PageWrapper>
  );
};

export default MyOrders;
