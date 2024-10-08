import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Login({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 27 26" fill="none">
      <Path
        d="M9.69727 7.39075C10.088 2.85294 12.4199 1 17.525 1H17.6888C23.3233 1 25.5796 3.2563 25.5796 8.89075V17.1092C25.5796 22.7437 23.3233 25 17.6888 25H17.525C12.4577 25 10.1258 23.1723 9.70987 18.7101"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 12.9878H17.2353"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.4243 8.76416L18.647 12.9868L14.4243 17.2095"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
