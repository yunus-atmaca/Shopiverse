import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function ArrowDown({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 52 26" fill="none">
      <Path
        d="M1 1L22.9285 22.9285C24.3094 24.3094 25 25 25.858 25C26.716 25 27.4067 24.3094 28.7875 22.9285L50.716 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
