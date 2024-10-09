import styles from './styles';

import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';

import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import Icon from '@/components/Icon';

type Props = {
  title: string;
};

const DateInput = ({title}: Props) => {
  const theme = useTheme();

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      {title && (
        <Text.H size={14} typography="semiBold" style={styles.title}>
          {title}
        </Text.H>
      )}
      <TouchableOpacity
        onPress={() => setOpen(true)}
        activeOpacity={0.7}
        style={[
          styles.inputContainer,
          {
            backgroundColor: theme.boxBG,
            borderColor: theme.border,
          },
        ]}>
        <Text.P style={{flex: 1}}>{dayjs(date).format('DD/MM/YYYY')}</Text.P>
        <Icon name="Calendar" />
      </TouchableOpacity>

      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        maximumDate={new Date()}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DateInput;
