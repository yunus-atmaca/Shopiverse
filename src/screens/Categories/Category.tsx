import categories from './categories';
import styles from './styles/categories';
import {IRoute, TargetCategory} from './types';

import React, {useMemo, useState} from 'react';
import {FlatList, Image, View} from 'react-native';

import Styles from '@/theme/style';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import Forms from '@/components/Forms';
import {IOption} from '@/types/utils/ComponentData';

type Props = {
  route: IRoute;
};

const Category = ({route: {key}}: Props) => {
  const theme = useTheme();

  const [targets, setTargets] = useState<TargetCategory[]>([]);

  const subCategories = useMemo(() => {
    const _targets: {[key: string]: TargetCategory[]} = {};
    const _sub_categories = categories[key].sub_categories;
    const tags: IOption[] = [];
    _sub_categories.forEach((sc, index) => {
      _targets[sc.id] = sc.sub_categories;
      tags.push({id: sc.id, name: sc.title});

      if (index === 0) setTargets(sc.sub_categories);
    });

    return {tags, targets: _targets};
  }, [key]);

  const onTagClicked = (tagId: string) => {
    if (subCategories.targets[tagId]) {
      setTargets(subCategories.targets[tagId]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tags}>
        <Forms.Tags onTag={onTagClicked} tags={subCategories.tags} />
      </View>
      <View style={styles.container}>
        <FlatList
          renderItem={({item}) => {
            return (
              <View style={styles.categoryContainer}>
                <View
                  style={[
                    styles.categoryContent,
                    {backgroundColor: theme.boxBG},
                    {borderColor: theme.border},
                  ]}>
                  <Image style={styles.img} source={item.img} />
                  <Text.H style={{marginTop: 4}} size={14}>
                    {item.title}
                  </Text.H>
                </View>
              </View>
            );
          }}
          data={targets}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            paddingHorizontal: Styles.hs(Styles.spacing.r),
            justifyContent: 'space-between',
          }}
        />
      </View>
    </View>
  );
};

export default Category;
