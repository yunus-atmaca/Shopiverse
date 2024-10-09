import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Box({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 25 26" fill="none">
      <Path
        d="M1.93555 7.53223L12.5342 13.6657L23.0608 7.5682"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5342 24.5405V13.6538"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 9.60915C1 7.95274 2.18828 5.93626 3.64064 5.13206L10.0502 1.56714C11.4186 0.810953 13.6631 0.810953 15.0315 1.56714L21.4411 5.13206C22.8934 5.93626 24.0817 7.95274 24.0817 9.60915V16.3909C24.0817 18.0473 22.8934 20.0638 21.4411 20.868L15.0315 24.4329C13.6631 25.189 11.4186 25.189 10.0502 24.4329L3.64064 20.868C2.18828 20.0638 1 18.0473 1 16.3909V15.4066"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5354 14.4946V10.1016L11.2495 5.88855L9.98922 5.16832L7.14453 3.52393"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
