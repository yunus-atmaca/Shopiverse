import styles from './styles';

import React, {useMemo} from 'react';
import {View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import Form from '@/components/Forms';
import {IOption} from '@/types/utils/Items';
import Info from '@/components/Info';

const MyReviews = () => {
  const tags = useMemo<IOption[]>(() => {
    return [
      {id: '1', name: 'Urün Değerlendirmelerim'},
      {id: '2', name: 'Satıcı Değerlendirmelerim'},
    ];
  }, []);

  return (
    <PageWrapper removeTop>
      <PageHeader header="My Orders" />

      <View style={styles.tags}>
        <Form.Tags tags={tags} />
      </View>
      <View style={styles.container}>
        <Info
          icon="CommentDots"
          title="Degerlendirmeniz Bulunamadi"
          //desc="Şuanda şiparişiniz bulunmamaktadır."
          navigateTo="Profile"
          buttonText={'Alışverişe Devam Et'}
        />
      </View>
    </PageWrapper>
  );
};

export default MyReviews;
