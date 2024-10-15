import styles from './styles/saleAgreement';

import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import Styles from '@/theme/style';

const SaleAgreement = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.boxBG,
          borderColor: theme.border,
        },
      ]}>
      <Text.H>Sale Agreement</Text.H>
      <View style={{marginTop: 10}}>
        <Text.H typography="bold" size={14}>
          Parties:
        </Text.H>
        <Text.H size={14} style={{}}>
          This agreement is made between BUYER and SELLER under the following
          terms and conditions.
        </Text.H>

        <Text.H typography="bold" size={14}>
          1. Product and Price:
        </Text.H>
        <Text.H size={14} style={{}}>
          {'  1.1. Product Sold:  \n'}
          {'  1.2. Product Price:  \n'}
          {'  1.3. Discount (if any):  \n'}
          {'  1.4. Taxes and Additional Fees:  \n'}
          {'  1.1. Product Sold:  \n'}
        </Text.H>

        <Text.H typography="bold" size={14}>
          2. Payment Terms:
        </Text.H>
        <Text.H size={14} style={{}}>
          {
            '  2.1. BUYER shall pay the full price of the PRODUCT as stipulated in this agreement to the bank account or through the payment method specified by SELLER within the agreed period. \n'
          }
          {
            '  2.2. Payment methods: [Bank transfer, credit card, online payment, etc.] \n'
          }
        </Text.H>

        <Text.H typography="bold" size={14}>
          3. Delivery:
        </Text.H>
        <Text.H size={14} style={{}}>
          {
            '  3.1. The PRODUCT shall be delivered to the address provided by BUYER within 14 business days after the signing of this agreement.\n'
          }
          {'  3.2. Delivery costs: included  \n'}
          {
            '  3.3. Upon receipt of the PRODUCT, BUYER shall sign a document acknowledging delivery, which shall be returned to SELLER  \n'
          }
        </Text.H>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <BouncyCheckbox
            isChecked={selected}
            disableText
            size={Styles.hs(18)}
            fillColor={theme.checkBoxFilled as string}
            unFillColor={theme.checkBoxUnFilled as string}
            text="Custom Checkbox"
            iconStyle={{borderColor: theme.checkBoxFilled}}
            innerIconStyle={{borderWidth: 1}}
            textStyle={{fontFamily: 'JosefinSans-Regular'}}
            onPress={() => setSelected(prev => !prev)}
          />
          <Text.H style={{marginLeft: 10}} typography="semiBold" size={14}>
            I agreed
          </Text.H>
        </View>
      </View>
    </View>
  );
};

export default SaleAgreement;
