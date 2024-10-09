import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Edit({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 26 26" fill="none">
      <Path
        d="M11.5954 1.16016H3.64885C2.18593 1.16016 1 2.34608 1 3.809V22.3509C1 23.8139 2.18593 24.9998 3.64885 24.9998H22.1908C23.6537 24.9998 24.8396 23.8139 24.8396 22.3509V14.4044"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.60871 12.4183L20.2041 1.82289C21.3012 0.725702 23.0802 0.725702 24.1774 1.82289C25.2745 2.92009 25.2745 4.69897 24.1774 5.79616L13.582 16.3916L7.62207 18.3782L9.60871 12.4183Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
