import styles from './styles';

import React, {useCallback, useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

import PageHeader from '@/components/PageHeader';
import PageWrapper from '@/components/PageWrapper';
import CreditCard from '@/components/CreditCard';
import {ICreditCard} from '@/types/utils/Info';
import {Storage} from '@/utils';
import {FlatList, ListRenderItem, View} from 'react-native';
import Info from '@/components/Info';
import {navigationRef} from '@/navigation';
import Button from '@/components/Button';

const MyCreditCards = () => {
  const isFocused = useIsFocused();
  const [cards, setCards] = useState<ICreditCard[]>();

  const fetchAddress = useCallback(async () => {
    const _cards = await Storage.get(Storage.Keys.USER_CREDIT_CARDS);
    setCards(_cards ?? []);
  }, []);

  useEffect(() => {
    if (isFocused) fetchAddress();
  }, [isFocused]);

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
            title="Kayitli Kredi Kartin Bulunmamaktadir"
            desc="Hızlıca alışverişini geçekleştirmek için kredi kartı ekle"
            navigateTo="AddCreditCard"
            buttonText={'Kredi Karti Ekle'}
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
            text="Yeni Kredi Karti Ekle"
          />
        </View>
      )}
    </PageWrapper>
  );
};

export default MyCreditCards;
