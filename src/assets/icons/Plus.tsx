import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Plus({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 26 26" fill="none">
      <Path
        d="M1 13H13M13 13H25M13 13V1M13 13V25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
