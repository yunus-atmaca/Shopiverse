import styles from './styles';

import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

import Icon, {IconNames} from '@/components/Icon';
import {navigationRef, Pages} from '@/navigation';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import Button from '@/components/Button';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  icon: IconNames;
  title: string;
  desc?: string;
  buttonText: string;
  navigateTo: Pages;
};

const Info = ({
  containerStyle,
  icon,
  title,
  desc,
  buttonText,
  navigateTo,
}: Props) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, containerStyle]}>
      <Icon size={48} containerSize={108} color={theme.markers} name={icon} />
      <Text.P align="center" style={styles.header}>
        {title}
      </Text.P>
      {desc && (
        <Text.P
          align="center"
          color={theme.textSub}
          style={styles.desc}
          size={12}>
          {desc}
        </Text.P>
      )}

      <View style={{width: '100%'}}>
        <Button
          onClick={() => navigationRef.navigate(navigateTo as any)}
          text={buttonText}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default Info;
