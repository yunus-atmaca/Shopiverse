import React from 'react';
import {View} from 'react-native';

import PageHeader from '@/components/PageHeader';
import PageWrapper from '@/components/PageWrapper';
import AccordionList from '@/components/AccordionList';

const FAQ = () => {
  return (
    <PageWrapper removeTop>
      <PageHeader header="Frequently Asked Questions" />
      <View style={{flex: 1}}>
        <AccordionList />
      </View>
    </PageWrapper>
  );
};

export default FAQ;
