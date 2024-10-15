import styles from './styles';

import React, {useMemo} from 'react';
import {View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import Form from '@/components/Forms';
import {IOption} from '@/types/utils/ComponentData';
import Info from '@/components/Info';

const MyReviews = () => {
  const tags = useMemo<IOption[]>(() => {
    return [
      {id: '1', name: 'My Product Reviews'},
      {id: '2', name: 'My Seller Reviews'},
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
          title="There Is No Review"
          navigateTo="Profile"
          buttonText={'Start Shopping'}
        />
      </View>
    </PageWrapper>
  );
};

export default MyReviews;
