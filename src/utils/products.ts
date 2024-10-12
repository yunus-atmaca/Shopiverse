import products from '@/data/products';

const getRandomProducts = (len: number = 8) => {
  const shuffled = products.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, len);
};

export {getRandomProducts};
