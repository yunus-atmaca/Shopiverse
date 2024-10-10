import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function ArrowTurnDown({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 22 26" fill="none">
      <Path
        d="M1 19.4614L6.53846 24.9999L12.0769 19.4614"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.53857 25V8.38462C6.53857 6.42609 7.3166 4.54779 8.70147 3.1629C10.0864 1.77802 11.9647 1 13.9232 1C15.8817 1 17.76 1.77802 19.1448 3.1629C20.5298 4.54779 21.3078 6.42609 21.3078 8.38462V17.6154"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
