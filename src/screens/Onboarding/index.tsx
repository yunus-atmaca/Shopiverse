import styles from './styles';
import Footer from './Footer';

import React, {useRef} from 'react';
import {Image, ScrollView, View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import Text from '@/components/Text';
import {useSharedValue} from 'react-native-reanimated';
import Styles from '@/theme/style';
import {navigationRef} from '@/navigation';

const screens = [
  {
    id: '1',
    title: 'Welcome to Shopiverse',
    desc: 'Your gateway to endless shopping possibilities. Explore, shop, and enjoy exclusive deals!',
    img: require('@/assets/onboarding/welcome.png'),
    call: 'Get Started',
  },
  {
    id: '2',
    title: 'Shop from a Wide Range of Products',
    desc: 'From electronics to fashion, we have everything you need. Find your favorite items and add them to your cart.',
    img: require('@/assets/onboarding/shopping.png'),
    call: 'Next',
  },
  {
    id: '3',
    title: 'Exclusive Discounts & Offers',
    desc: 'Save more with our daily deals and special discounts. Sign up for notifications so you never miss a sale!',
    img: require('@/assets/onboarding/discount.png'),
    call: 'Continue',
  },
  {
    id: '4',
    title: 'Fast and Secure Checkout',
    desc: 'Experience a smooth and secure checkout process. Pay with ease using multiple payment options.',
    img: require('@/assets/onboarding/checkout.png'),
    call: 'Next',
  },
  {
    id: '5',
    title: "You're All Set!",
    desc: 'Start exploring and enjoy a seamless shopping experience. Happy shopping!',
    img: require('@/assets/onboarding/start.png'),
    call: 'Start Shopping',
  },
];

const Onboarding = () => {
  const posX = useSharedValue(0);
  const scrollRef = useRef<ScrollView>(null);

  return (
    <PageWrapper>
      <ScrollView
        scrollEnabled={false}
        ref={scrollRef}
        onScroll={e => (posX.value = e.nativeEvent.contentOffset.x)}
        bounces={false}
        horizontal
        pagingEnabled
        snapToInterval={Styles.device.width}
        decelerationRate={0}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}>
        {screens.map(screen => {
          return (
            <View key={screen.id} style={styles.page}>
              <Text.H typography="semiBold" align="center">
                {screen.title}
              </Text.H>
              <Text.H size={14} align="center">
                {screen.desc}
              </Text.H>
              <Image style={styles.image} source={screen.img} />
            </View>
          );
        })}
      </ScrollView>

      <Footer
        onNext={current => {
          if (current === screens.length - 1) {
            navigationRef.navigate('Tabs');
            return;
          }
          const newIndex = current + 1;
          scrollRef.current?.scrollTo({
            y: 0,
            x: Styles.device.width * newIndex,
          });
        }}
        posX={posX}
        buttonTexts={screens.map(s => s.call)}
        itemLen={screens.length}
      />
    </PageWrapper>
  );
};

export default Onboarding;
