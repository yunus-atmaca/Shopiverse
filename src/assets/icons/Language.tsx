import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Language({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 39 39" fill="none">
      <Path
        d="M1 19.5496C1 29.7942 9.30493 38.0992 19.5496 38.0992C29.7942 38.0992 38.0992 29.7942 38.0992 19.5496C38.0992 9.30493 29.7942 1 19.5496 1C9.30493 1 1 9.30493 1 19.5496Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.4048 1.09131C21.4048 1.09131 26.9697 8.41955 26.9697 19.5492C26.9697 30.679 21.4048 38.0074 21.4048 38.0074"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.6948 38.0074C17.6948 38.0074 12.1299 30.679 12.1299 19.5492C12.1299 8.41955 17.6948 1.09131 17.6948 1.09131"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.16846 26.042H36.9318"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.16846 13.0571H36.9318"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
