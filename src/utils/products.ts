import products from '@/data/products';
import {IProduct} from '@/types/utils/Info';

const getRandomProducts = (len: number = 8) => {
  const shuffled = products.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, len);
};

const getProductsById = (ids: string[]) => {
  const _products: IProduct[] = [];

  products.forEach(p => {
    if (ids.includes(p.id)) _products.push(p);
  });

  return _products;
};

export {getRandomProducts, getProductsById};
