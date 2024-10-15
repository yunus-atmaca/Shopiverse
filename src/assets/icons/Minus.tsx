import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Minus({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 26 2" fill="none">
      <Path
        d="M1 1H25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
