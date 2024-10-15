import styles from './styles';

import React, {memo} from 'react';
import {View, Image} from 'react-native';

import {IBanner} from '@/types/utils/Info';
import {useTheme} from '@/hooks/theme';
import Text from '@/components/Text';
import Button from '@/components/Button';

type Props = {
  data: IBanner;
};

const Banner = ({data}: Props) => {
  const theme = useTheme();
  const {title, desc, call, img} = data;
  return (
    <View style={styles.banner}>
      <Image style={styles.img} source={img} />
      <View
        style={[
          styles.content,
          {backgroundColor: theme.boxBGHighlighted + '99'},
        ]}>
        <View style={styles.top}>
          <Text.H typography="bold" align="center" color={theme.textReversed}>
            {title}
          </Text.H>
          <Text.H
            typography="semiBold"
            size={14}
            align="center"
            color={theme.textReversed}>
            {desc}
          </Text.H>
        </View>
        <View style={styles.bottom}>
          <View style={{width: '60%'}}>
            <Button style={{marginEnd: 0}} text={call} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(Banner, () => true);
