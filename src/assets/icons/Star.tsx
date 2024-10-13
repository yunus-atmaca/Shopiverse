import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Star({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 27 26" fill="none">
      <Path
        d="M9.3209 8.24544L12.602 1.63633C13.0231 0.78789 14.2401 0.78789 14.6612 1.63633L17.9422 8.24544L25.2798 9.3118C26.2212 9.44861 26.5964 10.5992 25.9149 11.2592L20.6064 16.4002L21.8592 23.6628C22.0201 24.5956 21.0355 25.3067 20.1931 24.8663L13.6316 21.4354L7.07007 24.8663C6.22771 25.3067 5.24307 24.5956 5.40394 23.6628L6.65674 16.4002L1.34832 11.2592C0.666743 10.5992 1.04196 9.44861 1.9834 9.3118L9.3209 8.24544Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
