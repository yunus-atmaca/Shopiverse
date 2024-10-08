import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Calendar({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 26 26" fill="none">
      <Path
        d="M20.2 3.3999H5.8C3.14903 3.3999 1 5.54894 1 8.1999V20.1999C1 22.8509 3.14903 24.9999 5.8 24.9999H20.2C22.851 24.9999 25 22.8509 25 20.1999V8.1999C25 5.54894 22.851 3.3999 20.2 3.3999Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.2002 1V5.8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.8003 1V5.8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 10.6001H25"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
