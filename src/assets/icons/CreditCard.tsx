import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function CreditCard({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 35 26" fill="none">
      <Path
        d="M31 1H4C2.34315 1 1 2.34315 1 4V22C1 23.6569 2.34315 25 4 25H31C32.6569 25 34 23.6569 34 22V4C34 2.34315 32.6569 1 31 1Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 10H34"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
