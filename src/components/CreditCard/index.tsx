import Edit from './Edit';
import Display from './Display';

import React from 'react';

import {ICreditCard} from '@/types/utils/Info';

type Props = {
  onSave?: (card: ICreditCard) => void;
  onDeleteCard?: (card: ICreditCard) => void;
  mode?: 'edit' | 'display';
  data?: ICreditCard;
};

//Check Credit Card Validations
const CreditCard = ({onSave, onDeleteCard, mode = 'edit', data}: Props) => {
  if (mode === 'display' && data)
    return <Display onDelete={onDeleteCard} data={data} />;
  else if (mode === 'edit') return <Edit data={data} onSave={onSave} />;
  else return null;
};

export default CreditCard;
