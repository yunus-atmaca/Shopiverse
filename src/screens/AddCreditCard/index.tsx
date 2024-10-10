import React from 'react';

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
      const filtered = current.filter(c => c.id !== params?.creditCard?.id);
      _cards.push(card);
      _cards = _cards.concat(filtered);
    } else {
      _cards.push(card);
      if (current) _cards = _cards.concat(current);
    }

    Storage.set(Storage.Keys.USER_CREDIT_CARDS, _cards);
    navigationRef.goBack();
  };

  return (
    <PageWrapper removeTop>
      <PageHeader
        disableGab
        header={params?.creditCard ? 'Edit Credit Card' : 'Add Credit Card'}
      />

      <CreditCard data={params?.creditCard} onSave={onSave} />
    </PageWrapper>
  );
};

export default AddCreditCard;
