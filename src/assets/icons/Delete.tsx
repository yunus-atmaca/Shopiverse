import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Delete({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 24 26" fill="none">
      <Path
        d="M1 5.8H22.6M3.4 5.8V22.6C3.4 23.9255 4.47452 25 5.8 25H17.8C19.1255 25 20.2 23.9255 20.2 22.6V5.8M7 5.8V3.4C7 2.07452 8.07452 1 9.4 1H14.2C15.5255 1 16.6 2.07452 16.6 3.4V5.8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.2002 11.8003V19.0003"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.3999 11.8003V19.0003"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
