import styles from './styles/tags';

import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, TouchableOpacity, View} from 'react-native';

import {IOption} from '@/types/utils/ComponentData';
import Styles from '@/theme/style';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';

type Props = {
  tags: IOption[];
  initialIndex?: number;
  onTag?: (id: string) => void;
};

const Tags = ({onTag, initialIndex = 0, tags}: Props) => {
  const theme = useTheme();

  const [selected, setSelected] = useState(tags[initialIndex]);

  const renderTag: ListRenderItem<IOption> = ({item, index}) => {
    const isSelected = item.id === selected.id;
    return (
      <TouchableOpacity
        onPress={() => {
          setSelected(item);
          if (onTag) onTag(item.id);
        }}
        style={[
          styles.container,
          {
            borderColor: isSelected
              ? theme.borderHighlighted
              : theme.borderLight,
            backgroundColor: theme.boxBG,
          },
          {marginStart: index === 0 ? 0 : 12},
        ]}>
        <Text.P size={12}>{item.name}</Text.P>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tags}
        renderItem={renderTag}
        contentContainerStyle={{paddingHorizontal: Styles.hs(Styles.spacing.r)}}
      />
    </View>
  );
};

export default Tags;
