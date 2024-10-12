import {CATEGORIES} from '@/types/utils/Info';
import {MainCategory} from './types';

const categories: {[key in CATEGORIES]: MainCategory} = {
  fashion_cosmetic: {
    id: 'fashion_cosmetic',
    title: 'Fashion and Cosmetic',
    sub_categories: [
      {
        id: 'woman',
        title: 'Woman',
        sub_categories: [
          {
            id: 'woman_dress',
            title: 'Dress',
            img: require('@/assets/images/categories/dress.png'),
          },
          {
            id: 'woman_trousers',
            title: 'Trousers',
            img: require('@/assets/images/categories/jeans.png'),
          },
          {
            id: 'woman_jacket',
            title: 'Jacket',
            img: require('@/assets/images/categories/jacket.png'),
          },
          {
            id: 'woman_skirt',
            title: 'Skirt',
            img: require('@/assets/images/categories/skirt.png'),
          },
          {
            id: 'woman_coat',
            title: 'Coat',
            img: require('@/assets/images/categories/coat.png'),
          },
          {
            id: 'woman_t_shirt',
            title: 'T-Shirt',
            img: require('@/assets/images/categories/t_shirt.png'),
          },
          {
            id: 'woman_shoes',
            title: 'Shoes',
            img: require('@/assets/images/categories/shoes.png'),
          },
        ],
      },
      {
        title: 'Man',
        id: 'man',
        sub_categories: [
          {
            id: 'man_t_shirt',
            title: 'T-Shirt',
            img: require('@/assets/images/categories/man_t_shirt.png'),
          },
          {
            id: 'man_shirt',
            title: 'Shirt',
            img: require('@/assets/images/categories/shirt.png'),
          },
          {
            id: 'man_trousers',
            title: 'Trousers',
            img: require('@/assets/images/categories/man_jeans.png'),
          },
          {
            id: 'man_jacket',
            title: 'Jacket',
            img: require('@/assets/images/categories/man_jacket.png'),
          },
          {
            id: 'man_coat',
            title: 'Coat',
            img: require('@/assets/images/categories/man_coat.png'),
          },
          {
            id: 'man_suit',
            title: 'Suit',
            img: require('@/assets/images/categories/suit.png'),
          },
        ],
      },
      {
        title: 'Children',
        id: 'children',
        sub_categories: [
          {
            id: 'children_shoes',
            title: 'Shoes',
            img: require('@/assets/images/categories/shoes.png'),
          },
          {
            id: 'children_shirt',
            title: 'Shirt',
            img: require('@/assets/images/categories/c_shirt.png'),
          },
          {
            id: 'children_dress',
            title: 'Dress',
            img: require('@/assets/images/categories/c_dress.png'),
          },
          {
            id: 'children_shorts',
            title: 'Shorts',
            img: require('@/assets/images/categories/shorts.png'),
          },
        ],
      },
      {
        title: 'Personal care and cosmetics',
        id: 'personal_care_and_cosmetics',
        sub_categories: [
          {
            id: 'perfume_and_deodorant',
            title: 'Perfume and Deodorant',
            img: require('@/assets/images/categories/perfume.png'),
          },
          {
            id: 'shampoo',
            title: 'Shampoo',
            img: require('@/assets/images/categories/shampoo.png'),
          },
          {
            id: 'face_cream',
            title: 'Face Cream',
            img: require('@/assets/images/categories/cream.png'),
          },
          {
            id: 'sunscreen',
            title: 'Sunscreen',
            img: require('@/assets/images/categories/sunscreen.png'),
          },
          {
            id: 'makeup_sets',
            title: 'Makeup sets',
            img: require('@/assets/images/categories/makeup.png'),
          },
        ],
      },
    ],
  },
  electronic_phone_computer: {
    id: 'electronic_phone_computer',
    title: 'Electronic, Mobile Phones, Computers',
    sub_categories: [
      {
        title: 'Home Appliances',
        id: 'home_appliances',
        sub_categories: [
          {
            id: 'television',
            title: 'Television',
            img: require('@/assets/images/categories/television.png'),
          },
          {
            id: 'vacuum_cleaner',
            title: 'Vacuum Cleaner',
            img: require('@/assets/images/categories/vacuum_cleaner.png'),
          },
          {
            id: 'airfryer_and_Oven',
            title: 'Airfryer and Oven',
            img: require('@/assets/images/categories/oven.png'),
          },
          {
            id: 'iron',
            title: 'Iron',
            img: require('@/assets/images/categories/iron.png'),
          },
          {
            id: 'coffee_machine',
            title: 'Coffee Machine',
            img: require('@/assets/images/categories/coffee_machine.png'),
          },
          {
            id: 'washing_machine',
            title: 'Washing Machine',
            img: require('@/assets/images/categories/washing_machine.png'),
          },
          {
            id: 'dishwasher',
            title: 'Dishwasher',
            img: require('@/assets/images/categories/dishwasher.png'),
          },
          {
            id: 'freezer',
            title: 'Freezer',
            img: require('@/assets/images/categories/freezer.png'),
          },
        ],
      },
      {
        title: 'Computer and Accessories',
        id: 'computer_and_accessories',
        sub_categories: [
          {
            id: 'laptop_tablet',
            title: 'Laptop & Tablet',
            img: require('@/assets/images/categories/tablet.png'),
          },
          {
            id: 'computer',
            title: 'Computer',
            img: require('@/assets/images/categories/laptop.png'),
          },
          {
            id: 'computer_earphones',
            title: 'Earphones',
            img: require('@/assets/images/categories/earphones.png'),
          },
          {
            id: 'data_storages',
            title: 'Data Storages',
            img: require('@/assets/images/categories/usb.png'),
          },
          {
            id: 'playstation',
            title: 'Playstation',
            img: require('@/assets/images/categories/playstation.png'),
          },
          {
            id: 'computer_parts',
            title: 'Computer Parts',
            img: require('@/assets/images/categories/keyboard_mouse.png'),
          },
        ],
      },
      {
        title: 'Mobile Phones',
        id: 'mobile_phones',
        sub_categories: [
          {
            id: 'android_phones',
            title: 'Android Phones',
            img: require('@/assets/images/categories/phone.png'),
          },
          {
            id: 'ios_phones',
            title: 'Ios Phones',
            img: require('@/assets/images/categories/iphone.png'),
          },
          {
            id: 'phone_case',
            title: 'Phone Case',
            img: require('@/assets/images/categories/case.png'),
          },
          {
            id: 'phone_earphones',
            title: 'Earphones',
            img: require('@/assets/images/categories/earphones.png'),
          },
        ],
      },
    ],
  },
  supermarket: {
    id: 'supermarket',
    title: 'Supermarket',
    sub_categories: [
      {
        id: 'food',
        title: 'Food',
        sub_categories: [
          {
            id: 'breakfast_food',
            title: 'Breakfast Food',
            img: require('@/assets/images/categories/breakfast_food.png'),
          },
          {
            id: 'coffee',
            title: 'Coffee',
            img: require('@/assets/images/categories/coffee.png'),
          },
          {
            id: 'nuts',
            title: 'Nuts',
            img: require('@/assets/images/categories/nuts.png'),
          },
          {
            id: 'organic_food',
            title: 'Organic Food',
            img: require('@/assets/images/categories/organic.png'),
          },
          {
            id: 'tea',
            title: 'Tea',
            img: require('@/assets/images/categories/leaf.png'),
          },
        ],
      },
      {
        id: 'home_and_cleaning',
        title: 'Home & Cleaning',
        sub_categories: [
          {
            id: 'laundry',
            title: 'Laundry',
            img: require('@/assets/images/categories/detergent.png'),
          },
          {
            id: 'wash-up',
            title: 'Wash-up',
            img: require('@/assets/images/categories/wash-up.png'),
          },
          {
            id: 'paper_products',
            title: 'Paper Products',
            img: require('@/assets/images/categories/toilet_paper.png'),
          },
          {
            id: 'home_cleaning',
            title: 'Home Cleaning',
            img: require('@/assets/images/categories/cleaning.png'),
          },
        ],
      },
      {
        id: 'health_and_sports',
        title: 'Health & Sports',
        sub_categories: [
          {
            id: 'vitamins_and_supplements',
            title: 'Vitamins and Supplements',
            img: require('@/assets/images/categories/pills.png'),
          },
          {
            id: 'diaper',
            title: 'Diaper',
            img: require('@/assets/images/categories/diaper.png'),
          },
          {
            id: 'sport_products',
            title: 'Sport Products',
            img: require('@/assets/images/categories/football.png'),
          },
        ],
      },
    ],
  },
  home_and_furniture: {
    id: 'home_and_furniture',
    title: 'Home & Furniture',
    sub_categories: [
      {
        id: 'kitchen',
        title: 'Kitchen',
        sub_categories: [
          {
            id: 'glasses',
            title: 'Glasses',
            img: require('@/assets/images/categories/glass.png'),
          },
          {
            id: 'pots',
            title: 'Pots',
            img: require('@/assets/images/categories/pots.png'),
          },
          {
            id: 'dinner_set',
            title: 'Dinner Set',
            img: require('@/assets/images/categories/dinner_set.png'),
          },
        ],
      },
      {
        id: 'furniture',
        title: 'Furniture',
        sub_categories: [
          {
            id: 'living_room',
            title: 'Living Rom',
            img: require('@/assets/images/categories/sofa.png'),
          },
          {
            id: 'bedroom',
            title: 'Bedroom',
            img: require('@/assets/images/categories/bed.png'),
          },
          {
            id: 'chairs',
            title: 'Chairs',
            img: require('@/assets/images/categories/chairs.png'),
          },
        ],
      },
    ],
  },
};

export default categories;
