import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Location({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 20 26" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.97712 25C15.9619 18.3418 18.9542 13.3509 18.9542 10.0272C18.9542 5.0416 14.9351 1 9.97712 1C5.0192 1 1 5.0416 1 10.0272C1 13.3509 3.99237 18.3418 9.97712 25Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.97728 13.7178C12.0431 13.7178 13.7178 12.0431 13.7178 9.97728C13.7178 7.91148 12.0431 6.23682 9.97728 6.23682C7.91148 6.23682 6.23682 7.91148 6.23682 9.97728C6.23682 12.0431 7.91148 13.7178 9.97728 13.7178Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
