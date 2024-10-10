import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import PageHeader from '@/components/PageHeader';
import PageWrapper from '@/components/PageWrapper';
import CreditCard from '@/components/CreditCard';

const MyCreditCards = () => {
  const rotate = useSharedValue('0deg');

  /*const animatedStyle = useAnimatedStyle(() => {
    return {
      //transform: [{rotate: rotate.value}],
      transform: [
        //{rotateX: rotate.value},
        //{rotateZ: rotate.value},
        {rotateY: rotate.value},
      ],
    };
  });

  useEffect(() => {
    rotate.value = '0deg';
    setTimeout(() => {
      rotate.value = withTiming('180deg', {duration: 4000});
    }, 2000);

    setTimeout(() => {
      rotate.value = withTiming('360deg', {duration: 4000});
    }, 10000);

    return () => {};
  }, []);*/

  return (
    <PageWrapper removeTop>
      <PageHeader header="My Credit Cards" />
        
      <CreditCard />
    </PageWrapper>
  );
};

export default MyCreditCards;
