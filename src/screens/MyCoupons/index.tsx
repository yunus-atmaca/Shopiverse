import styles from './styles';

import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';

import PageHeader from '@/components/PageHeader';
import PageWrapper from '@/components/PageWrapper';
import Info from '@/components/Info';
import Coupon from '@/components/Coupon';
import {ICoupon} from '@/types/utils/Info';
import {RootStackScreenProps} from '@/navigation';

const _coupons: ICoupon[] = [
  {
    expireDate: '12/12/2024',
    brand: 'Urban Wardrobe',
    title: 'Büyük Sezon İndirimi Başladı!',
    desc: "%50'ye varan indirimlerle alışverişin keyfini çıkarın! Ayakkabıdan giysiye, elektronik ürünlerden ev eşyalarına kadar geniş ürün yelpazemizde büyük fırsatlar sizi bekliyor. Stoklarla sınırlı olan bu fırsatı kaçırmayın, hemen alışveriş yapın ve sezonun en iyi indirimlerinden yararlanın!",
    discount: '50%',
    termOfUse: [
      'İndirim kodu, yalnızca belirtilen tarihler arasında geçerlidir ve bu sürenin sonunda kullanılamaz.',
      'Her indirim kodu, yalnızca bir kez kullanılabilir ve birden fazla siparişte geçerli değildir.',
      'İndirim kodunun kullanılabilmesi için minimum alışveriş tutarı (örneğin, 100 TL) gereklidir.',
      'İndirim kullanılarak alınan ürünlerin iade edilmesi durumunda, indirim tutarı geri ödenmez.',
      'İndirim kodu, başka kampanya veya indirimlerle birleştirilemez.',
      'İndirim kodu yalnızca belirtilen ürün kategorilerinde veya seçili ürünlerde geçerlidir.',
      'Mağaza, gerekli gördüğü durumlarda kampanyayı değiştirme veya sonlandırma hakkını saklı tutar.',
    ],
    lowerLimit: undefined,
  },
  {
    expireDate: '10/11/2024',
    brand: 'Moda Mart',
    title: 'Büyük Alışveriş Festivali İndirimi Başladı!',
    desc: 'Favori ürünlerinizde 300TL’a varan indirimlerle alışverişin tadını çıkarın! Moda, ayakkabı, aksesuar ve daha fazlasında inanılmaz fırsatlar sizleri bekliyor. Yalnızca belirli bir süre için geçerli olan bu harika fırsatları kaçırmayın, hemen sepetinizi doldurun ve avantajlı fiyatlarla alışveriş yapın!',
    discount: '300TL',
    termOfUse: [
      'İndirim, kampanya dönemi boyunca (örneğin, 1 Ekim - 15 Ekim) geçerlidir.',
      'İndirim kodu her kullanıcı tarafından yalnızca bir kez kullanılabilir.',
      'İndirim kodu, en az 150 TL ve üzeri alışverişlerde geçerlidir.',
      'İndirim, sadece seçili ürünlerde veya kategorilerde kullanılabilir.',
      'Bu indirim, başka kampanyalar veya indirimlerle birleştirilemez.',
      'İndirim kullanılarak yapılan alışverişlerde ürünlerin iadesi durumunda, iade edilen tutar, indirimsiz fiyat üzerinden hesaplanacaktır.',
      'Mağazamız, kampanya koşullarını gerektiğinde değiştirme veya kampanyayı sonlandırma hakkını saklı tutar.',
    ],
    lowerLimit: '1500TL',
  },
];

const MyCoupons = ({route: {params}}: RootStackScreenProps<'MyCoupons'>) => {
  const [coupons, setCoupons] = useState<ICoupon[]>(params?.coupons ?? []);

  useEffect(() => {
    setCoupons(params?.coupons ?? []);
  }, [params?.coupons]);

  const renderCoupon: ListRenderItem<ICoupon> = ({item}) => {
    return <Coupon data={item} containerStyle={{marginTop: 12}} />;
  };

  return (
    <PageWrapper removeTop>
      <PageHeader header="My Coupons" />
      {coupons && coupons.length === 0 && (
        <View style={[styles.container, styles.empty]}>
          <Info
            icon="Coupon"
            title="Kayitli Indirim Bulunmamaktadir"
            navigateTo="MyCoupons"
            navigateParams={{coupons: _coupons}}
            buttonText={'Kupon Ekle'}
          />
        </View>
      )}
      {coupons && coupons.length > 0 && (
        <FlatList renderItem={renderCoupon} data={coupons} />
      )}
    </PageWrapper>
  );
};

export default MyCoupons;
