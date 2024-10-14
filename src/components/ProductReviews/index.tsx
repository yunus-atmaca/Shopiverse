import styles from './styles';

import React from 'react';
import {View, FlatList, ListRenderItem} from 'react-native';

import {useTheme} from '@/hooks/theme';
import Text from '@/components/Text';
import {IReview} from '@/types/utils/Info';
import reviews from '@/data/productReviews';
import Icon from '../Icon';
import dayjs from 'dayjs';
import Button from '../Button';

const ProductReviews = () => {
  const theme = useTheme();

  const renderReview = (review: IReview, index: number) => {
    return (
      <View
        style={[styles.review, {borderColor: theme.border}]}
        key={'r-' + index}>
        <View style={styles.user}>
          <Text.P size={14}>{review.fullName}</Text.P>
          <View style={styles.rate}>
            <Icon color={theme.iconHighlighted} size={12} name="StarFilled" />
            <Text.P style={{marginStart: 4}}>{review.rate}</Text.P>
          </View>
        </View>
        <Text.P color={theme.textSub} size={12}>
          {review.desc}
        </Text.P>
        <Text.P color={theme.textSub} style={{marginTop: 10}} size={12}>
          {dayjs(review.createdAt).format('DD/MM/YYYY')}
        </Text.P>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.boxBG,
          borderColor: theme.borderLight,
        },
      ]}>
      <View style={[styles.title, {borderColor: theme.border}]}>
        <Text.H>Reviews</Text.H>
      </View>
      {reviews.slice(0, 8).map((review, i) => {
        return renderReview(review, i);
      })}

      <View style={styles.seeAll}>
        <Button text={`See All(${reviews.length})`} />
      </View>
    </View>
  );
};

export default ProductReviews;
