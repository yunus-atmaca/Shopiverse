import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Clock({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 53 53" fill="none">
      <Path
        d="M51.3715 26.4895C51.3715 40.1704 40.2681 51.2738 26.5871 51.2738C12.9061 51.2738 1.80273 40.1704 1.80273 26.4895C1.80273 12.8085 12.9061 1.70508 26.5871 1.70508C40.2681 1.70508 51.3715 12.8085 51.3715 26.4895Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M35.7819 34.3704L28.0988 29.7853C26.7604 28.9922 25.6699 27.0838 25.6699 25.5224V15.3608"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
