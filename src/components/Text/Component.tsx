import {Props} from './types';

import React from 'react';
import {Text} from 'react-native';

import {typographies} from '@/theme/typography';
import {useTheme} from '@/hooks/theme';
import Styles from '@/theme/style';

type ParagraphProps = {
  typography?: keyof typeof typographies.paragraph;
};

//Paragraph
const P = ({
  color,
  size = 16,
  align = 'left',
  typography = 'regular',
  ...props
}: Props & ParagraphProps) => {
  const theme = useTheme();

  return (
    <Text
      allowFontScaling={false}
      style={{
        color: color ?? theme.text,
        fontSize: Styles.hs(size),
        textAlign: align,
        fontFamily: typographies.paragraph[typography],
      }}
      {...props}
    />
  );
};

type HeaderProps = {
  typography?: keyof typeof typographies.header;
};

//Header
const H = ({
  color,
  size = 16,
  align = 'left',
  typography = 'regular',
  ...props
}: Props & HeaderProps) => {
  const theme = useTheme();

  return (
    <Text
      allowFontScaling={false}
      style={{
        color: color ?? theme.text,
        fontSize: Styles.hs(size),
        textAlign: align,
        fontFamily: typographies.header[typography],
      }}
      {...props}
    />
  );
};

export {P, H};
