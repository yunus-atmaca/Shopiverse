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
      setValid(isValid);
      if (onValidationChanged) onValidationChanged(isValid);
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
        {headingIcon && (
          <Icon containerStyle={styles.iconHeading} name={headingIcon} />
        )}
        <RNTextInput
          {...props}
          ref={ref}
          style={[styles.input, {color: theme.text}]}
          placeholderTextColor={theme.inputPlaceHolder}
          cursorColor={theme.inputCursor}
          secureTextEntry={props.secureTextEntry && secure}
          onChangeText={_onChangeText}
        />
        {props.secureTextEntry && (
          <Icon
            onClick={() => setSecure(prev => !prev)}
            containerStyle={styles.iconEnding}
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
  const field = action.payload.field;
  const fieldState = state[action.payload.field];

  /*if (action.type) {
    return {
      ...state,
      [field]: {value: '', valid: false},
    };
  }*/

  return {
    ...state,
    [field]: {
      ...fieldState,
      [action.type]: action.payload.value,
    },
  };
}

export default TextInput;
