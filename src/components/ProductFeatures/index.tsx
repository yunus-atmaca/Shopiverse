import styles from './styles';

import React from 'react';
import {View} from 'react-native';

import AccordionItem from '@/components/AccordionItem';
import {useTheme} from '@/hooks/theme';
import Text from '@/components/Text';

const productDesc = [
  'Şık ve modern görünümlü, 1.4 inç yüksek çözünürlüklü dokunmatik ekran.',
  'Adım sayar, kalp atış hızı izleme ve uyku takibi özellikleri.',
  'Farklı spor modları ile antrenmanlarınızı izleyin ve geliştirin.',
  'Harici bir cihaza ihtiyaç duymadan konum takibi yapma imkânı.',
  '50 metreye kadar suya dayanıklı, yüzme gibi aktiviteler için ideal.',
  '7 güne kadar dayanan güçlü batarya ile kesintisiz kullanım.',
  'Akıllı telefonunuza bağlayarak mesajlarınızı ve çağrılarınızı kontrol edin.',
  'E-postalar, mesajlar ve sosyal medya bildirimleri bileğinizde.',
  'Zevkinize uygun farklı saat yüzlerini seçin.',
  'Hafif yapısı sayesinde rahat bir kullanım sunar, dayanıklı malzemeleri ile uzun ömürlüdür.',
];

const cancelation = [
  'Siparişinizi, kargo süreci başlamadan önce iptal edebilirsiniz.',
  'İptal işlemi için sipariş numaranızla birlikte müşteri hizmetlerimize başvurmanız yeterlidir.',
  'İptal edilen siparişlerin ücret iadesi, ödemenin yapıldığı yöntemle 7 iş günü içerisinde hesabınıza geri yatırılacaktır.',
  'İade etmek istediğiniz ürünün orijinal ambalajında, kullanılmamış ve tekrar satılabilir durumda olması gerekmektedir.',
  'Ürün teslim alındıktan sonraki 14 gün içerisinde iade talebi oluşturabilirsiniz.',
  'İade işlemi için ürünle birlikte faturayı da göndermeniz gereklidir.',
  'İade edilen ürünlerin ücreti, ürün bize ulaştıktan sonra 10 iş günü içerisinde ödeme yönteminize geri yatırılacaktır.',
  'Hijyenik ürünler (iç giyim, kulaklık vb.) ve kişiye özel olarak hazırlanan ürünler iade kapsamında değildir.',
  'İndirime giren veya kampanyalı ürünlerde iade yapılamaz.',
  'İade işlemlerinde kargo ücreti, aksi belirtilmediği sürece müşteriye aittir.',
  'Ürün hatalı veya kusurlu ise kargo ücreti mağazamız tarafından karşılanacaktır.',
  'İade onaylandığında, ürün bedeli ödeme şeklinize uygun olarak hesabınıza yatırılır.',
  'Kredi kartı ile yapılan ödemelerde iade süresi bankaya bağlı olarak değişebilir.',
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
      <AccordionItem title={'Ürün Açıklaması'}>
        {productDesc.map((pd, indx) => {
          return (
            <Text.P style={styles.text} key={'pd-' + indx} size={14}>
              {`${indx + 1}- ` + pd}
            </Text.P>
          );
        })}
      </AccordionItem>
      <AccordionItem title={'İptal ve İade Koşulları'}>
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
