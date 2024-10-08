import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function EyeSlash({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 26 26" fill="none">
      <Path
        d="M16.0361 9.96412L9.96412 16.0361C9.18411 15.2561 8.7041 14.1881 8.7041 13.0001C8.7041 10.6241 10.6241 8.7041 13.0001 8.7041C14.1881 8.7041 15.2561 9.18411 16.0361 9.96412Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.984 5.52371C17.884 3.93969 15.484 3.07568 13 3.07568C8.76389 3.07568 4.81585 5.57171 2.06782 9.89176C0.98781 11.5838 0.98781 14.4278 2.06782 16.1198C3.01583 17.6079 4.11984 18.8919 5.31986 19.9239"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.7041 22.0364C10.0721 22.6124 11.5241 22.9244 13.0001 22.9244C17.2361 22.9244 21.1842 20.4284 23.9322 16.1084C25.0122 14.4163 25.0122 11.5723 23.9322 9.88023C23.5362 9.25622 23.1042 8.66822 22.6602 8.11621"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.2122 13.8403C16.9002 15.5324 15.5201 16.9124 13.8281 17.2244"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.9641 16.0361L1 25.0002"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25.0002 1L16.0361 9.9641"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
