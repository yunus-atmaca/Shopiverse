import React from 'react';
import {} from 'react-native';

import PageHeader from '@/components/PageHeader';
import PageWrapper from '@/components/PageWrapper';
import CreditCard from '@/components/CreditCard';
import {ICreditCard} from '@/types/utils/Info';
import {Storage} from '@/utils';
import {navigationRef, RootStackScreenProps} from '@/navigation';

const AddCreditCard = ({
  route: {params},
}: RootStackScreenProps<'AddCreditCard'>) => {
  const onSave = async (card: ICreditCard) => {
    let _cards: ICreditCard[] = [];

    const current = (await Storage.get(
      Storage.Keys.USER_CREDIT_CARDS,
    )) as ICreditCard[];

    if (params?.creditCard) {
      //Edit
    } else {
      _cards.push(card);
      if (current) _cards = _cards.concat(current);
    }

    Storage.set(Storage.Keys.USER_CREDIT_CARDS, _cards);
    navigationRef.goBack();
  };

  return (
    <PageWrapper removeTop>
      <PageHeader disableGab header="Add Credit Card" />

      <CreditCard onSave={onSave} />
    </PageWrapper>
  );
};

export default AddCreditCard;
