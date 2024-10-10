import Edit from './Edit';
import Display from './Display';

import React from 'react';

import {ICreditCard} from '@/types/utils/Info';

type Props = {
  onSave?: (card: ICreditCard) => void;
  mode?: 'edit' | 'display';
  data?: ICreditCard;
};

//Check Credit Card Validations
const CreditCard = ({onSave, mode = 'edit', data}: Props) => {
  if (mode === 'display' && data) return <Display data={data} />;
  else if (mode === 'edit') return <Edit onSave={onSave} />;
  else return null;
};

export default CreditCard;
