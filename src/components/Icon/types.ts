import * as Icons from '@/assets/icons';
import {ColorValue, ViewStyle} from 'react-native';

export type IconNames = keyof typeof Icons;

export type Props = {
  name: IconNames;
  size?: number;
  containerSize?: number;
  color?: ColorValue;
  bgColor?: ColorValue;
  onClick?: () => void;
  containerStyle?: ViewStyle;
  scaleFactor?: 'horizontal' | 'vertical';
  isTab?: boolean;
};
