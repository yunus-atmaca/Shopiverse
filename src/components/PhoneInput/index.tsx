import styles from './styles';

import React, {useEffect, useRef, useState} from 'react';
import {View, TextInput, TextInputProps, TouchableOpacity} from 'react-native';

import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import {ICountry} from '@/screens/Countries/types';
import Icon from '@/components/Icon';
import {navigationRef} from '@/navigation';

type Props = TextInputProps & {
  title?: string;
  isRequired?: boolean;
  country?: ICountry;
};

const PhoneInput = ({title, country, isRequired = false, ...props}: Props) => {
  const theme = useTheme();

  const inputRef = useRef<TextInput>(null);
  const [_country, setCountry] = useState<ICountry>(
    country ?? {
      name: 'Turkey',
      cca2: 'TR',
      flag: '🇹🇷',
      callingCode: '+90',
    },
  );
  const [phoneNumber, setPhoneNumber] = useState(_country.callingCode);

  useEffect(() => {
    if (country) {
      inputRef.current?.clear();
      setPhoneNumber(country.callingCode);
      setCountry(country);
    }
  }, [country]);

  const _onChangeText = (text: string) => {
    let newValue = text;
    if (text.length <= _country.callingCode.length) {
      newValue = _country.callingCode;
    }

    setPhoneNumber(newValue);
    if (props.onChangeText) {
      props.onChangeText(newValue);
    }
  };

  return (
    <View style={styles.container}>
      {title && (
        <Text.H size={14} typography="semiBold" style={styles.title}>
          {title}
        </Text.H>
      )}
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: theme.inputBackground,
            borderColor: theme.inputBorder,
          },
        ]}>
        <TouchableOpacity
          onPress={() => navigationRef.navigate('Countries')}
          activeOpacity={0.7}
          style={[styles.country, {borderRightColor: theme.inputBorder}]}>
          <Text.H style={{marginEnd: 4}}>{_country.flag}</Text.H>
          <Icon size={16} hasContainerStyle={false} name={'ArrowDown'} />
        </TouchableOpacity>

        <TextInput
          {...props}
          ref={inputRef}
          style={[styles.input, {color: theme.inputText}]}
          placeholderTextColor={theme.inputPlaceHolder}
          cursorColor={theme.inputCursor}
          onChangeText={_onChangeText}
          value={phoneNumber}
          keyboardType="number-pad"
        />
      </View>
    </View>
  );
};

export default PhoneInput;
