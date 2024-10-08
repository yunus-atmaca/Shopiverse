import styles from './styles';

import React, {ComponentPropsWithRef, useState} from 'react';
import {View, TextInput as RNTextInput, TextInputProps} from 'react-native';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import Icon, {IconNames} from '@/components/Icon';

type Props = ComponentPropsWithRef<typeof RNTextInput> &
  TextInputProps & {
    title?: string;
    headingIcon?: IconNames;
  };

const TextInput = ({title, headingIcon, ref, ...props}: Props) => {
  const theme = useTheme();
  const [secure, setSecure] = useState(true);

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
    </View>
  );
};

export default TextInput;
