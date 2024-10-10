import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function ArrowTurnUp({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 22 26" fill="none">
      <Path
        d="M21.3074 6.53846L15.7689 1L10.2305 6.53846"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.7692 1V17.6154C15.7692 19.574 14.9912 21.4522 13.6063 22.837C12.2214 24.222 10.3431 25 8.38461 25C6.42609 25 4.54779 24.222 3.1629 22.837C1.77802 21.4522 1 19.574 1 17.6154V8.38462"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
