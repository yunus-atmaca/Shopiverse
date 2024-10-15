import styles from './styles';

import React from 'react';

import PageHeader from '@/components/PageHeader';
import PageWrapper from '@/components/PageWrapper';
import CreditCard from '@/components/CreditCard';
import {ICreditCard} from '@/types/utils/Info';
import {Storage} from '@/utils';
import {FlatList, ListRenderItem, View} from 'react-native';
import Info from '@/components/Info';
import {navigationRef} from '@/navigation';
import Button from '@/components/Button';
import {useCreditCards} from '@/hooks/user';

const MyCreditCards = () => {
  const {cards, setCards} = useCreditCards();

  const onDeleteCard = (card: ICreditCard) => {
    if (cards) {
      const filtered = cards.filter(a => a.id !== card.id);
      Storage.set(Storage.Keys.USER_CREDIT_CARDS, filtered);
      setCards(filtered);
    }
  };

  const renderCard: ListRenderItem<ICreditCard> = ({item}) => {
    return (
      <CreditCard onDeleteCard={onDeleteCard} mode="display" data={item} />
    );
  };

  return (
    <PageWrapper removeTop>
      <PageHeader header="My Credit Cards" />
      {cards && cards.length === 0 && (
        <View style={[styles.container, styles.empty]}>
          <Info
            icon="CreditCard"
            title="There Is No Registered Credit Card"
            desc="Add a credit card to make your purchase quickly"
            navigateTo="AddCreditCard"
            buttonText={'Add Credit Card'}
          />
        </View>
      )}

      {cards && cards.length > 0 && (
        <View style={styles.container}>
          <FlatList
            data={cards}
            renderItem={renderCard}
            keyExtractor={(_, i) => 'credit-card' + i}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}

      {cards && cards.length > 0 && (
        <View style={styles.button}>
          <Button
            onClick={() => {
              navigationRef.navigate('AddCreditCard', {creditCard: undefined});
            }}
            text="Add New Credit Card"
          />
        </View>
      )}
    </PageWrapper>
  );
};

export default MyCreditCards;
