import styles from './styles';

import React, {ComponentPropsWithRef, useState} from 'react';
import {View, TextInput as RNTextInput, TextInputProps} from 'react-native';

import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import Icon, {IconNames} from '@/components/Icon';
import {Validator} from '@/utils/validators';
import validators from '@/utils/validators';

type Props = ComponentPropsWithRef<typeof RNTextInput> &
  TextInputProps & {
    title?: string;
    headingIcon?: IconNames;
    validator?: Validator;
    required?: boolean;
    errorText?: string;
    onValidationChanged?: (valid: boolean) => void;
  };

const TextInput = ({
  required = false,
  title,
  headingIcon,
  validator,
  errorText,
  onValidationChanged,
  ref,
  ...props
}: Props) => {
  const theme = useTheme();
  const [secure, setSecure] = useState(true);
  const [valid, setValid] = useState(true);

  const _onChangeText = (text: string) => {
    if (validator) {
      const isValid = validators[validator](text);
      console.debug('validator -> ',validator, isValid, text);
      setValid(isValid);
      if (onValidationChanged) onValidationChanged(valid);
    }

    if (props.onChangeText) props.onChangeText(text);
  };

  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.title}>
          <Text.H size={14} typography="semiBold" style={{marginEnd: 2}}>
            {title}
          </Text.H>
          {required && (
            <Icon
              size={8}
              hasContainerStyle={false}
              color={theme.textActive}
              name="Asterisk"
            />
          )}
        </View>
      )}
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: theme.inputBackground,
            borderColor: valid ? theme.inputBorder : theme.textError,
          },
        ]}>
        {headingIcon && (
          <Icon
            containerStyle={styles.iconHeading}
            hasContainerStyle={false}
            name={headingIcon}
          />
        )}
        <RNTextInput
          {...props}
          ref={ref}
          style={[styles.input, {color: theme.inputText}]}
          placeholderTextColor={theme.inputPlaceHolder}
          cursorColor={theme.inputCursor}
          secureTextEntry={props.secureTextEntry && secure}
          onChangeText={_onChangeText}
        />
        {props.secureTextEntry && (
          <Icon
            onClick={() => setSecure(prev => !prev)}
            containerStyle={styles.iconEnding}
            hasContainerStyle={false}
            name={secure ? 'EyeSlash' : 'Eye'}
          />
        )}
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

export type TextInputState = {
  value: string;
  valid: boolean;
};
export type TextInputActionType = keyof TextInputState;
export type TextInputAction = {
  type: TextInputActionType;
  payload: {field: string; value: any};
};
export type TextInputStates = {[key: string]: TextInputState};

export function inputReducer(state: TextInputStates, action: TextInputAction) {
  switch (action.type) {
    case action.type:
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          [action.type]: action.payload.value,
        },
      };
    default:
      return state;
  }
}

export default TextInput;
