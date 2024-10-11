import categories from './categories';
import styles from './styles/categories';
import {IRoute, MainCategories, TargetCategory} from './types';

import React, {useMemo, useState} from 'react';
import {FlatList, Image, View} from 'react-native';

import Styles from '@/theme/style';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import Forms from '@/components/Forms';

type Props = {
  route: IRoute;
};

const Category = ({route: {key}}: Props) => {
  const theme = useTheme();

  const [targets, setTargets] = useState<TargetCategory[]>([]);

  const subCategories = useMemo(() => {
    console.debug(categories[key as MainCategories]);

    const main_sub_categories = categories[key as MainCategories].sub_categories;
    main_sub_categories.map((msc, index)=>{
      //msc.sub_categories
    });


    const _subs = Object.keys(_sub_categories);

    const _targets: {[key: string]: TargetCategory[]} = {};

    let _targetsIndx = 0;
    const tags = _subs.map(s => {
      if (Array.isArray(_sub_categories[s].sub_categories)) {
        _targets[s] = _sub_categories[s].sub_categories;

        if (_targetsIndx === 0) setTargets(_sub_categories[s].sub_categories);

        _targetsIndx += 1;
      }

      return {id: s, name: _sub_categories[s].title};
    });

    return {tags, targets: _targets};
  }, [key]);

  const onTagClicked = (tagId: string) => {
    //console.debug(subCategories.targets);
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
