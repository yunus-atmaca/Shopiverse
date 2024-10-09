import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function CommentDots({color}: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 24 26" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 15.3231C1.01982 17.0594 1.72869 18.7169 2.97063 19.9306C4.21255 21.1444 5.88582 21.8149 7.62224 21.7949H10.831C11.7035 21.7956 12.5379 22.1528 13.1408 22.7835L14.8507 24.5718C15.1212 24.8458 15.4902 25 15.8752 25C16.2603 25 16.6293 24.8458 16.8998 24.5718L19.5551 21.7949L20.4268 20.8224C20.5874 20.648 20.7624 20.4874 20.9499 20.3425C22.4901 19.1318 23.3907 17.2821 23.394 15.3231V7.46912C23.351 3.85444 20.3865 0.958681 16.7718 1.00045H7.62224C4.00754 0.958681 1.04303 3.85444 1 7.46912V15.3231Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.19922 11.3969C4.19922 10.5135 4.91538 9.79736 5.79879 9.79736C6.6822 9.79736 7.39837 10.5135 7.39837 11.3969C7.39837 12.2803 6.6822 12.9964 5.79879 12.9964C5.37455 12.9964 4.9677 12.828 4.66772 12.5281C4.36775 12.228 4.19922 11.8212 4.19922 11.3969Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5977 11.3969C10.5977 10.5135 11.3138 9.79736 12.1972 9.79736C13.0807 9.79736 13.7968 10.5135 13.7968 11.3969C13.7968 12.2803 13.0807 12.9964 12.1972 12.9964C11.3138 12.9964 10.5977 12.2803 10.5977 11.3969Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9956 11.3969C16.9956 10.5135 17.7117 9.79736 18.5952 9.79736C19.4786 9.79736 20.1948 10.5135 20.1948 11.3969C20.1948 12.2803 19.4786 12.9964 18.5952 12.9964C17.7117 12.9964 16.9956 12.2803 16.9956 11.3969Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
