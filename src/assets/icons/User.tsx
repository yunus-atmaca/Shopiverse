import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function User({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 23 26" fill="none">
      <Path
        d="M11.3081 13C14.6218 13 17.3081 10.3137 17.3081 7C17.3081 3.6863 14.6218 1 11.3081 1C7.9944 1 5.30811 3.6863 5.30811 7C5.30811 10.3137 7.9944 13 11.3081 13Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.616 25.0001C21.616 20.3561 16.996 16.6001 11.308 16.6001C5.62 16.6001 1 20.3561 1 25.0001"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
