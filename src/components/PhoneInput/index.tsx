import styles from './styles';

import React, {useEffect, useRef, useState} from 'react';
import {View, TextInput, TextInputProps, TouchableOpacity} from 'react-native';

import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import {ICountry} from '@/screens/Countries/types';
import Icon from '@/components/Icon';
import {navigationRef, Pages} from '@/navigation';
import validators, {Validator} from '@/utils/validators';

type Props = TextInputProps & {
  title?: string;
  required?: boolean;
  country?: ICountry;
  currentPage: Pages;
  validator?: Validator;
  onValidationChanged?: (valid: boolean) => void;
  onPhoneChanged?: (phone: string, country: ICountry) => void;
  errorText?: string;
};

const PhoneInput = ({
  title,
  currentPage,
  country = {
    name: 'Turkey',
    cca2: 'TR',
    flag: '🇹🇷',
    callingCode: '+90',
  },
  required = false,
  validator,
  onValidationChanged,
  onPhoneChanged,
  errorText = 'Error',
  ...props
}: Props) => {
  const theme = useTheme();

  /*if (__DEV__ && props.onChangeText) {
    throw new Error('use onPhoneChanged instead of onChangeText');
  }*/

  const inputRef = useRef<TextInput>(null);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    inputRef.current?.clear();
    if (onValidationChanged) {
      onValidationChanged(false);
    }
    if (props.onChangeText) props.onChangeText(country.callingCode);
  }, [country.cca2]);

  const _onChangeText = (text: string) => {
    let newValue = text;
    if (text.length <= country.callingCode.length) {
      newValue = country.callingCode;
    }

    if (validator) {
      const isValid = validators[validator](text);
      setValid(isValid);
      if (onValidationChanged) onValidationChanged(isValid);
    }

    if (props.onChangeText) props.onChangeText(newValue);
  };

  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.title}>
          <Text.H size={14} typography="semiBold" style={{marginEnd: 2}}>
            {title}
          </Text.H>
          {required && (
            <Icon size={8} color={theme.iconHighlighted} name="Asterisk" />
          )}
        </View>
      )}
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: theme.boxBG,
            borderColor: valid ? theme.border : theme.borderError,
          },
        ]}>
        <TouchableOpacity
          onPress={() =>
            navigationRef.navigate('Countries', {navigateTo: currentPage})
          }
          activeOpacity={0.7}
          style={[styles.country, {borderRightColor: theme.border}]}>
          <Text.H style={{marginEnd: 4}}>{country.flag}</Text.H>
          <Icon size={16} name={'ArrowDown'} />
        </TouchableOpacity>

        <TextInput
          {...props}
          ref={inputRef}
          style={[styles.input, {color: theme.text}]}
          placeholderTextColor={theme.inputPlaceHolder}
          cursorColor={theme.inputCursor}
          onChangeText={_onChangeText}
          value={props.value}
          keyboardType="number-pad"
        />
      </View>
      <Text.P
        style={{opacity: valid ? 0 : 1}}
        color={theme.textError}
        size={10}>
        {errorText ?? 'Error'}
      </Text.P>
    </View>
  );
};

export default PhoneInput;
