import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function ArrowRight({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 13 26" fill="none">
      <Path
        d="M1 25L10.8787 15.1212C12.0454 13.9546 12.0454 12.0455 10.8787 10.8788L1 1"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
