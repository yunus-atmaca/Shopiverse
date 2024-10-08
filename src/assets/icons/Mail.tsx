import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Mail({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 32 26" fill="none">
      <Path
        d="M1 4C1 2.34314 2.34314 1 4 1H28C29.6569 1 31 2.34314 31 4V22C31 23.6569 29.6569 25 28 25H4C2.34314 25 1 23.6569 1 22V4Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.5 2.5L12.0138 10.9567C14.2872 12.9775 17.7129 12.9775 19.9863 10.9567L29.5 2.5"
        stroke={color}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
