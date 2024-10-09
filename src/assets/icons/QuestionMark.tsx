import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function QuestionMark({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 14 26" fill="none">
      <Path
        d="M1 6.92064C1 -0.973584 13.4051 -0.973518 13.4051 6.92066C13.4051 12.5593 7.76644 11.4314 7.76644 18.1978"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.78076 25.0003L7.7973 24.9819"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
