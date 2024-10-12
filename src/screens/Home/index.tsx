import React, {useEffect} from 'react';

import PageWrapper from '@/components/PageWrapper';
import Product from '@/components/Product';

const Home = () => {
  useEffect(() => {}, []);

  return (
    <PageWrapper>
      <Product containerStyle={{margin: 24}} />
    </PageWrapper>
  );
};

export default Home;
