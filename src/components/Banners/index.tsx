import React from 'react';
import {View} from 'react-native';

import {useTheme} from '@/hooks/theme';

const Banners = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        width: '100%',
        height: 180,
        marginTop: 12,
        backgroundColor: theme.textHighlighted,
      }}></View>
  );
};

export default Banners;
