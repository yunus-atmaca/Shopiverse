import {IProduct, CATEGORIES} from '@/types/utils/Info';
const products: IProduct[] = [
  {
    id: '2166c309-d673-4011-a39d-edf96c185beb',
    start_rate: 4,
    images: [
      require('@/assets/images/products/woman-jacket-p1.jpg'),
      require('@/assets/images/products/woman-jacket-p2.jpg'),
    ],
    brand: 'Conner, Gray and Gutierrez',
    title: 'Jacket',
    desc: 'End land but argue account make.',
    price: '$462.82',
    discountedPrice: '$386.72',
    genders: ['woman'],
    category: CATEGORIES.FASHION_COSMETIC,
    subCategory: 'woman',
    targetCategory: 'jacket',
    numberOfRate: '2343',
  },
  {
    id: '8e13fc4e-a092-446e-863e-b1a3f6aff007',
    start_rate: 4,
    images: [
      require('@/assets/images/products/woman-dress-p1.jpg'),
      require('@/assets/images/products/woman-dress-p2.jpg'),
    ],
    brand: 'Williams, Flores and Beard',
    title: 'Dress',
    desc: 'Deal ok would turn per.',
    price: '$562.68',
    discountedPrice: null,
    genders: ['woman'],
    category: CATEGORIES.FASHION_COSMETIC,
    subCategory: 'woman',
    targetCategory: 'dress',
    numberOfRate: '3509',
  },
  {
    id: 'c2b3cfd3-cc62-4d1a-8df3-41d971291a7a',
    start_rate: 3,
    images: [
      require('@/assets/images/products/laptop-1.jpg'),
      require('@/assets/images/products/laptop-2.jpg'),
      require('@/assets/images/products/laptop-3.jpg'),
    ],
    brand: 'Gonzales, Robbins and Villegas',
    title: 'Laptop',
    desc: 'Hundred even nice none future ahead discuss.',
    price: '$538.67',
    discountedPrice: '$405.52',
    genders: ['woman', 'man'],
    category: CATEGORIES.ELECTRONIC_PHONE_COMPUTER,
    subCategory: 'computer_and_accessories',
    targetCategory: 'laptop_tablet',
    numberOfRate: '3899',
  },
  {
    id: 'bf3e9651-a306-4dc2-b277-59f01d463f9e',
    start_rate: 2,
    brand: 'Perry Ltd',
    images: [
      require('@/assets/images/products/coffee-1.jpg'),
      require('@/assets/images/products/coffee-2.jpg'),
      require('@/assets/images/products/coffee-3.jpg'),
    ],
    title: 'Coffee Beans',
    desc: 'Imagine music message night.',
    price: '$708.49',
    discountedPrice: '$536.97',
    genders: ['man', 'woman'],
    category: CATEGORIES.SUPERMARKET,
    subCategory: 'food',
    targetCategory: 'coffee',
    numberOfRate: '1076',
  },
  {
    id: '377173e8-f607-48a6-99a3-884ec3b42722',
    start_rate: 1,
    images: [
      require('@/assets/images/products/vitamins-1.jpg'),
      require('@/assets/images/products/vitamins-2.jpg'),
    ],
    brand: 'Quinn Group',
    title: 'Vitamins',
    desc: 'Pm guess very find president prevent result.',
    price: '$835.37',
    discountedPrice: null,
    genders: ['woman', 'man'],
    category: CATEGORIES.SUPERMARKET,
    subCategory: 'health_and_sports',
    targetCategory: 'vitamins_and_supplements',
    numberOfRate: '3696',
  },
  {
    id: '32bbd646-c2f2-42ae-9446-90cbe5f2b125',
    start_rate: 2,
    images: [
      require('@/assets/images/products/mobile_phone-1.jpg'),
      require('@/assets/images/products/mobile_phone-2.jpg'),
    ],
    brand: 'Reed and Sons',
    title: 'Mobile Phones',
    desc: 'Spring suffer represent include.',
    price: '$178.44',
    discountedPrice: '$104.53',
    genders: ['man', 'woman'],
    category: CATEGORIES.ELECTRONIC_PHONE_COMPUTER,
    subCategory: 'mobile_phones',
    targetCategory: 'android_phones',
    numberOfRate: '2219',
  },
  {
    id: '4965855c-64e0-4c36-8662-35f5255aa59c',
    start_rate: 5,
    images: [
      require('@/assets/images/products/living_room-1.jpg'),
      require('@/assets/images/products/living_room-2.jpg'),
    ],
    brand: 'Daniel-Grant',
    title: 'Living Room',
    desc: 'Cold work floor executive up design accept.',
    price: '$225.66',
    discountedPrice: '$193.81',
    genders: ['man', 'woman'],
    category: CATEGORIES.HOME_AND_FURNITURE,
    subCategory: 'furniture',
    targetCategory: 'living_room',
    numberOfRate: '2853',
  },
  {
    id: '5191b7bc-1b67-4720-8644-d020d5f14584',
    start_rate: 5,
    images: [
      require('@/assets/images/products/pots-1.jpg'),
      require('@/assets/images/products/pots-2.jpg'),
      require('@/assets/images/products/pots-3.jpg'),
    ],
    brand: 'Smith-Rowe',
    title: 'Pots',
    desc: 'Article consumer chance cover boy term cost.',
    price: '$327.94',
    discountedPrice: null,
    genders: ['man', 'woman'],
    category: CATEGORIES.HOME_AND_FURNITURE,
    subCategory: 'kitchen',
    targetCategory: 'pots',
    numberOfRate: '3306',
  },
  {
    id: '1f67dbda-3c98-4974-8a6a-71fb10699b18',
    start_rate: 5,
    images: [
      require('@/assets/images/products/perfume-1.jpg'),
      require('@/assets/images/products/perfume-2.jpg'),
    ],
    brand: 'Mckenzie-Parker',
    title: 'Perfume',
    desc: 'Subject drive thing season technology career individual.',
    price: '$308.59',
    discountedPrice: '$278.42',
    genders: ['man', 'woman'],
    category: CATEGORIES.FASHION_COSMETIC,
    subCategory: 'personal_care_and_cosmetics',
    targetCategory: 'perfume_and_deodorant',
    numberOfRate: '3526',
  },
  {
    id: 'd7c36985-bd41-49a8-b4c7-b25543f13238',
    start_rate: 4,
    images: [
      require('@/assets/images/products/tea-1.jpg'),
      require('@/assets/images/products/tea-2.jpg'),
      require('@/assets/images/products/tea-3.jpg'),
    ],
    brand: 'Wood, Jennings and Lyons',
    title: 'State',
    desc: 'Page return soldier beat difficult prepare fund.',
    price: '$494.61',
    discountedPrice: '$437.25',
    genders: ['man', 'woman'],
    category: CATEGORIES.SUPERMARKET,
    subCategory: 'food',
    targetCategory: 'tea',
    numberOfRate: '3140',
  },
  {
    id: '44cbdb02-5fd7-472f-888d-1fa8cf9b4315',
    start_rate: 3,
    images: [
      require('@/assets/images/products/man_suit-1.jpg'),
      require('@/assets/images/products/man_suit-2.jpg'),
      require('@/assets/images/products/man_suit-3.jpg'),
    ],
    brand: 'Berry, Thomas and Reyes',
    title: 'Man Suit',
    desc: 'Region situation speech artist life ability art.',
    price: '$580.50',
    discountedPrice: '$444.99',
    genders: ['man'],
    category: CATEGORIES.FASHION_COSMETIC,
    subCategory: 'man',
    targetCategory: 'suit',
    numberOfRate: '3807',
  },
  {
    id: '7e57d5da-12c4-4d0e-9a80-3f1f5c3a7e02',
    start_rate: 3,
    images: [
      require('@/assets/images/products/man_tshirt-1.jpg'),
      require('@/assets/images/products/man_tshirt-2.jpg'),
    ],
    brand: 'Rice Group',
    title: 'Man T-Shirt',
    desc: 'Late boy over pull answer peace color.',
    price: '$481.27',
    discountedPrice: '$422.72',
    genders: ['man'],
    category: CATEGORIES.FASHION_COSMETIC,
    subCategory: 'man',
    targetCategory: 'man_t_shirt',
    numberOfRate: '4151',
  },
  {
    id: 'f2e15840-d4e5-4ba1-8d4f-1402212d632b',
    start_rate: 2,
    images: [
      require('@/assets/images/products/television-1.jpg'),
      require('@/assets/images/products/television-2.jpg'),
    ],
    brand: 'Riley-Wilson',
    title: 'Television',
    desc: 'Begin learn special plan care animal hand.',
    price: '$843.93',
    discountedPrice: '$731.41',
    genders: ['woman', 'man'],
    category: CATEGORIES.ELECTRONIC_PHONE_COMPUTER,
    subCategory: 'home_appliances',
    targetCategory: 'television',
    numberOfRate: '2571',
  },
  {
    id: 'f5f65d77-c75e-44ff-8a12-82d1a40aece4',
    start_rate: 4,
    images: [
      require('@/assets/images/products/coffee_machine-1.jpg'),
      require('@/assets/images/products/coffee_machine-2.jpg'),
    ],
    brand: 'Patton PLC',
    title: 'Coffee Machines',
    desc: 'Per describe game consider just nice show.',
    price: '$988.82',
    discountedPrice: '$837.50',
    genders: ['woman', 'man'],
    category: CATEGORIES.ELECTRONIC_PHONE_COMPUTER,
    subCategory: 'home_appliances',
    targetCategory: 'coffee_machine',
    numberOfRate: '2841',
  },
  {
    id: '0dcde4cf-2b90-4559-8dc2-aeb835ebd289',
    start_rate: 3,
    images: [
      require('@/assets/images/products/child-dress-1.jpg'),
      require('@/assets/images/products/child-dress-2.jpg'),
    ],
    brand: 'Martinez and Sons',
    title: 'Child Dress',
    desc: 'Article ready soldier degree form protect suggest.',
    price: '$522.60',
    discountedPrice: null,
    genders: ['woman'],
    category: CATEGORIES.FASHION_COSMETIC,
    subCategory: 'children',
    targetCategory: 'dress',
    numberOfRate: '1927',
  },
  {
    id: '0fa812f5-ced2-4a4e-809a-5c803616c004',
    start_rate: 5,
    images: [
      require('@/assets/images/products/headphones-1.jpg'),
      require('@/assets/images/products/headphones-2.jpg'),
      require('@/assets/images/products/headphones-3.jpg'),
    ],
    brand: 'Snyder, Mccoy and Johnson',
    title: 'Headphones',
    desc: 'Another goal street list technology kid policy.',
    price: '$672.15',
    discountedPrice: null,
    genders: ['man', 'woman'],
    category: CATEGORIES.ELECTRONIC_PHONE_COMPUTER,
    subCategory: 'computer_and_accessories',
    targetCategory: 'earphones',
    numberOfRate: '4130',
  },
  {
    id: '00917865-e1e6-43fc-bbd8-9af95c6e9f00',
    start_rate: 5,
    images: [
      require('@/assets/images/products/dinner_set-1.jpg'),
      require('@/assets/images/products/dinner_set-2.jpg'),
    ],
    brand: 'King LLC',
    title: 'Dinner Set',
    desc: 'Great yet later establish safe morning continue.',
    price: '$442.73',
    discountedPrice: '$331.20',
    genders: ['woman', 'man'],
    category: CATEGORIES.HOME_AND_FURNITURE,
    subCategory: 'kitchen',
    targetCategory: 'dinner_set',
    numberOfRate: '1421',
  },
  {
    id: 'b9fbd760-6b21-4f16-8051-130556e2605e',
    start_rate: 1,
    images: [
      require('@/assets/images/products/laundry-1.jpg'),
      require('@/assets/images/products/laundry-2.jpg'),
    ],
    brand: 'Smith-Barker',
    title: 'Laundry',
    desc: 'Finish process soon lay man administration perhaps.',
    price: '$260.04',
    discountedPrice: '$179.03',
    genders: ['woman', 'man'],
    category: CATEGORIES.SUPERMARKET,
    subCategory: 'home_and_cleaning',
    targetCategory: 'laundry',
    numberOfRate: '2745',
  },
  {
    id: '20aec16d-26d6-4375-9e60-b967fe441f24',
    start_rate: 4,
    images: [
      require('@/assets/images/products/mattia-occhi1.jpg'),
      require('@/assets/images/products/mattia-occhi2.jpg'),
      require('@/assets/images/products/mattia-occhi3.jpg'),
    ],
    brand: 'Taylor-Johnson',
    title: 'Shoes',
    desc: 'Future visit call develop.',
    price: '$684.65',
    discountedPrice: '$411.96',
    genders: ['woman'],
    category: CATEGORIES.FASHION_COSMETIC,
    subCategory: 'woman',
    targetCategory: 'shoes',
    numberOfRate: '3189',
  },
];

export default products;
