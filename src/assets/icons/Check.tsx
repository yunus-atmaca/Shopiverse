import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Check({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.5 5.5L8.4375 18.5L2.5 12.5909"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
