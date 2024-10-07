import {ColorValue, TextProps, TextStyle} from 'react-native';

export type Props = TextProps & {
  color?: ColorValue;
  size?: number;
  align?: TextStyle['textAlign'];
};
