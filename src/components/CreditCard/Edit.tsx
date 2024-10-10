import styles from './styles';
import {Focus} from './types';
import {
  CARD_HEIGHT,
  CARD_WIDTH,
  maskCardNumber,
  maskCVV,
  maskExpireDate,
} from './helper';

import Front from './Front';
import Back from './Back';

import React, {useCallback, useReducer, useRef, useState} from 'react';
import {
  Keyboard,
  TextInput as RNTextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import cardValidator from 'card-validator';

import Text from '@/components/Text';
import TextInput from '@/components/TextInput';
import {useTheme} from '@/hooks/theme';
import {ICreditCard} from '@/types/utils/Info';
import {id} from '@/utils/helpers';

type State = {
  number: string;
  holderName: string;
  expireDate: string;
  cvv: string;
  focus: Focus | undefined;
  cardType: string | undefined;
  text: string;
  inputProps: {
    keyboardType: string;
    title: string;
    placeHolder: string;
  };
};

const initialState: State = {
  number: '',
  holderName: '',
  expireDate: '',
  cvv: '',
  focus: undefined,
  cardType: undefined,
  text: '',
  inputProps: {
    keyboardType: 'default',
    title: '',
    placeHolder: '',
  },
};

type Action = {
  type:
    | 'number'
    | 'holderName'
    | 'expireDate'
    | 'cvv'
    | 'focus'
    | 'cardType'
    | 'text';
  payload: string | Focus;
};

export function inputReducer(state: State, action: Action) {
  switch (action.type) {
    case 'cardType':
      return {...state, cardType: action.payload};
    case 'number':
      return {...state, number: action.payload};
    case 'holderName':
      return {...state, holderName: action.payload};
    case 'expireDate':
      return {...state, expireDate: action.payload};
    case 'focus':
      let inputProps = {
        keyboardType: 'number-pad',
        title: '',
        placeHolder: '',
      };

      let text = '';
      if (action.payload === Focus.CARD_NUMBER) {
        inputProps.title = 'Card Number';
        inputProps.placeHolder = 'XXXX XXXX XXXX XXXX';
        text = state.number;
      } else if (action.payload === Focus.CARDHOLDER_NAME) {
        inputProps.keyboardType = 'default';
        inputProps.title = 'Card Holder Name';
        inputProps.placeHolder = 'First Last';
        text = state.holderName;
      } else if (action.payload === Focus.VALID_THRU) {
        inputProps.title = 'Expire Date';
        inputProps.placeHolder = 'MM/YY';
        text = state.expireDate;
      } else if (action.payload === Focus.CVV) {
        inputProps.title = 'CVV';
        inputProps.placeHolder = '578';
        text = state.cvv;
      }

      return {...state, focus: action.payload as Focus, inputProps, text};
    case 'text':
      const newValue = action.payload;

      let unknowKey: string = 'unknowKey';
      if (state.focus === Focus.CARD_NUMBER) unknowKey = 'number';
      else if (state.focus === Focus.CARDHOLDER_NAME) unknowKey = 'holderName';
      else if (state.focus === Focus.VALID_THRU) unknowKey = 'expireDate';
      else if (state.focus === Focus.CVV) unknowKey = 'cvv';

      return {...state, text: newValue, [unknowKey]: newValue};
    default:
      return state;
  }
}

type Props = {
  onSave?: (card: ICreditCard) => void;
  mode?: 'edit' | 'display';
  data?: ICreditCard;
};

//Check Credit Card Validations
const CreditCard = ({onSave, mode = 'edit', data}: Props) => {
  const theme = useTheme();
  const inputRef = useRef<RNTextInput>(null);

  const [state, dispatch] = useReducer(inputReducer, initialState);
  const {
    number,
    holderName,
    expireDate,
    cvv,
    inputProps: {keyboardType, title, placeHolder},
    focus,
    cardType,
    text,
  } = state;

  const frontNumberOfField = useRef(0);
  const [uiReady, setUIReady] = useState(false);

  const rotateY = useSharedValue('0deg');
  const animatedStyle = useAnimatedStyle(() => {
    return {transform: [{skewX: rotateY.value}]};
  });

  const onFrontReady = useCallback((field: Focus) => {
    frontNumberOfField.current += 1;
    if (frontNumberOfField.current === 3) {
      setUIReady(true);

      dispatch({type: 'focus', payload: Focus.CARD_NUMBER});

      setTimeout(() => inputRef.current?.focus(), 1000);
    }
  }, []);

  const rotate = useCallback((to: string) => {
    rotateY.value = withTiming(to, {
      duration: 400,
      easing: Easing.linear,
    });
  }, []);

  const onNext = () => {
    if (!uiReady) return;

    inputRef.current?.clear();
    Keyboard.dismiss();

    if (focus === Focus.CARD_NUMBER) {
      dispatch({type: 'focus', payload: Focus.CARDHOLDER_NAME});
    } else if (focus === Focus.CARDHOLDER_NAME) {
      dispatch({type: 'focus', payload: Focus.VALID_THRU});
    } else if (focus === Focus.VALID_THRU) {
      dispatch({type: 'focus', payload: Focus.CVV});
      rotate('180deg');
    } else if (focus === Focus.CVV && onSave) {
      //save
      onSave({
        id: id(),
        number,
        holderName,
        expireDate,
        cvv,
      });
    }
  };

  const onTurnItOver = () => {
    Keyboard.dismiss();
    inputRef.current?.clear();

    dispatch({type: 'focus', payload: Focus.VALID_THRU});
    rotate('0deg');
  };

  const onChangeText = (t: string) => {
    let newValue = t;
    if (focus === Focus.CARD_NUMBER) {
      const validator = cardValidator.number(t);
      dispatch({type: 'cardType', payload: validator.card?.type ?? ''});
      newValue = maskCardNumber(
        t,
        validator.card?.gaps,
        validator.card?.lengths,
      );
    } else if (focus === Focus.CARDHOLDER_NAME) {
      //const validator = cardValidator.cardholderName(t)
      //console.debug('Name -> ', validator);
    } else if (focus === Focus.VALID_THRU) {
      const validator = cardValidator.expirationDate(t);
      //console.debug('Name -> ', validator);
      newValue = maskExpireDate(t);
    } else if (focus === Focus.CVV) {
      const validator = cardValidator.cvv(t);
      newValue = maskCVV(t);
    }

    dispatch({type: 'text', payload: newValue});
  };

  const onFocusChange = (newFocus: Focus) => {
    Keyboard.dismiss();
    inputRef.current?.clear();

    dispatch({type: 'focus', payload: newFocus});
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.card,
          {
            height: CARD_HEIGHT,
            width: CARD_WIDTH,
          },
          animatedStyle,
        ]}>
        <Front
          cardNumber={number}
          cardHolderName={holderName}
          cardExpireDate={expireDate}
          onFocusChange={onFocusChange}
          focus={focus}
          onFrontReady={onFrontReady}
          type={cardType}
        />
        <Back cvv={cvv} type={cardType} focus={focus} />
      </Animated.View>

      <View style={styles.buttons}>
        {focus === Focus.CVV && (
          <TouchableOpacity
            onPress={onTurnItOver}
            activeOpacity={0.7}
            style={[
              styles.button,
              {backgroundColor: theme.boxBG, borderColor: theme.border},
            ]}>
            <Text.P size={14}>Turn it over</Text.P>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={onNext}
          activeOpacity={0.7}
          style={[
            styles.button,
            {backgroundColor: theme.boxBG, borderColor: theme.border},
          ]}>
          <Text.P size={14}>{focus === Focus.CVV ? 'Save' : 'Next'}</Text.P>
        </TouchableOpacity>
      </View>

      <View style={styles.input}>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          title={title}
          placeholder={placeHolder}
          ref={inputRef}
          keyboardType={keyboardType as any}
        />
      </View>
    </View>
  );
};

export default CreditCard;
