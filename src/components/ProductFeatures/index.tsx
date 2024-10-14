import styles from './styles';

import React from 'react';
import {View} from 'react-native';

import AccordionItem from '@/components/AccordionItem';
import {useTheme} from '@/hooks/theme';
import Text from '@/components/Text';

const productDesc = [
  'Sleek and modern design with a 1.4-inch high-resolution touchscreen display.',
  'Step counter, heart rate monitoring, and sleep tracking features.',
  'Track and improve your workouts with various sports modes.',
  'Built-in GPS for location tracking without needing an external device.',
  'Water-resistant up to 50 meters, ideal for swimming and other activities.',
  'Seamless usage with a powerful battery lasting up to 7 days.',
  'Connect to your smartphone and control your messages and calls.',
  'Emails, messages, and social media notifications right on your wrist.',
  'Choose from different watch faces to match your style.',
  'Lightweight and comfortable for everyday use, built with durable materials for long-lasting wear.',
];

const cancelation = [
  'You can cancel your order before the shipping process begins.',
  'To cancel, simply contact our customer service with your order number.',
  'Refunds for canceled orders will be returned to your account within 7 business days using the original payment method.',
  'The product must be in its original packaging, unused, and resalable condition to be eligible for a return.',
  'You can submit a return request within 14 days after receiving the product.',
  'Please include the invoice along with the product when returning.',
  'Refunds will be processed within 10 business days after we receive the returned product.',
  'Hygiene-related products (such as undergarments, earphones) and personalized items are not eligible for return.',
  'Discounted or promotional items cannot be returned.',
  'Return shipping costs are the customer’s responsibility unless otherwise stated.',
  'If the product is defective or faulty, the return shipping cost will be covered by our store.',
  'Once the return is approved, the refund will be credited to your original payment method.',
  'For payments made via credit card, the refund time may vary depending on the bank.',
];

const ProductFeatures = () => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.boxBG,
          borderTopColor: theme.borderLight,
          borderBottomColor: theme.borderLight,
        },
      ]}>
      <AccordionItem title={'Product Description'}>
        {productDesc.map((pd, indx) => {
          return (
            <Text.P style={styles.text} key={'pd-' + indx} size={14}>
              {`${indx + 1}- ` + pd}
            </Text.P>
          );
        })}
      </AccordionItem>
      <AccordionItem title={'Cancellation and Refund Conditions'}>
        {cancelation.map((c, indx) => {
          return (
            <Text.P style={styles.text} key={'c-' + indx} size={14}>
              {`${indx + 1}- ` + c}
            </Text.P>
          );
        })}
      </AccordionItem>
    </View>
  );
};

export default ProductFeatures;
