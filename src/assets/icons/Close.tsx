import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Close({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 27 27" fill="none">
      <Path
        d="M25.687 1.42383L1.68701 25.4238"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.68701 1.42383L25.687 25.4238"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
