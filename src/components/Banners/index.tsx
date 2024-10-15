import Banner from './Banner';
import Indicator from './Indicator';

import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

import {useTheme} from '@/hooks/theme';
import _banners from '@/data/banners';
import {IBanner} from '@/types/utils/Info';
import Styles from '@/theme/style';

const Banners = () => {
  const theme = useTheme();

  const posX = useSharedValue(0);

  const renderBanner: ListRenderItem<IBanner> = ({item}) => {
    return <Banner data={item} />;
  };

  return (
    <View
      style={
        {
          //backgroundColor: theme.textHighlighted,
        }
      }>
      <FlatList
        data={_banners}
        renderItem={renderBanner}
        horizontal
        onScroll={({nativeEvent: {contentOffset}}) =>
          (posX.value = contentOffset.x)
        }
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => 'banner-' + i}
        pagingEnabled
        getItemLayout={(_, index) => {
          return {
            length: Styles.device.width,
            offset: Styles.device.width * index,
            index,
          };
        }}
      />
      <Indicator posX={posX} itemLen={_banners.length} />
    </View>
  );
};

export default Banners;
