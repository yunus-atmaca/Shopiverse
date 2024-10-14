import Indicators from './Indicators';

import React, {memo} from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

import {useTheme} from '@/hooks/theme';
import Styles from '@/theme/style';

type Props = {
  imgs: ImageSourcePropType[];
  imgStyle: StyleProp<ImageStyle>;
};

const ProductImgs = ({imgs, imgStyle}: Props) => {
  const theme = useTheme();
  const posX = useSharedValue(0);

  return (
    <View
      style={{
        borderBottomWidth: Styles.borderWidth.m,
        borderColor: theme.borderLight,
      }}>
      <FlatList
        data={imgs}
        horizontal
        onScroll={({
          nativeEvent: {
            contentOffset: {x},
          },
        }) => (posX.value = x)}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        getItemLayout={(_, index) => {
          return {
            length: Styles.device.width,
            offset: Styles.device.width * index,
            index,
          };
        }}
        renderItem={({item}) => {
          return (
            <Image
              source={item}
              style={[
                imgStyle,
                {backgroundColor: theme.boxBG, resizeMode: 'contain'},
              ]}
            />
          );
        }}
        keyExtractor={(_, i) => 'img-' + i}
      />
      <Indicators posX={posX} itemLen={imgs.length} />
    </View>
  );
};

export default memo(ProductImgs, () => true);
