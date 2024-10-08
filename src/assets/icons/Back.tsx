import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Back({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 28 26" fill="none">
      <Path
        d="M13 25L1 13L13 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.6665 13H26.9998"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
