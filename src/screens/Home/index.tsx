import React, {useEffect} from 'react';

import PageWrapper from '@/components/PageWrapper';
import ProductsInATitle from '@/components/ProductsInATitle';

const Home = () => {
  useEffect(() => {}, []);

  return (
    <PageWrapper>
      <ProductsInATitle title="Senin icin öneriler" />
    </PageWrapper>
  );
};

export default Home;
