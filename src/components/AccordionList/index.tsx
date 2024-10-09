import styles from './styles';

import Item from './Item';

import React from 'react';
import {ScrollView, View} from 'react-native';

import {AccordionItem} from '@/types/utils/ComponentData';

type Props = {
  data: AccordionItem[];
};

const AccordionList = ({}: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView bounces={false}>
        {new Array(8).fill(0).map((_, i) => {
          return <Item key={'item-' + i} />;
        })}
      </ScrollView>
    </View>
  );
};

export default AccordionList;
