import {IBanner} from '@/types/utils/Info';

const banners: IBanner[] = [
  {
    title: 'End of Season Sale!',
    desc: "Up to 50% off on all your favorite items! Don't miss out on these limited-time deals. Shop now before it's too late!",
    call: 'Shop Now',
    img: require('@/assets/images/banners/banner1.jpg'),
  },
  {
    title: 'New Arrivals Just Landed!',
    desc: 'Check out the latest trends in fashion, electronics, and home decor. Be the first to get your hands on our new collection!',
    call: 'Explore New Arrivals',
    img: require('@/assets/images/banners/banner2.jpg'),
  },
  {
    title: 'Hurry! Limited Time Offer',
    desc: "Exclusive discounts available for the next 24 hours! Grab up to 50% off on selected categories. Don't miss your chance!",
    call: 'Grab the Deal',
    img: require('@/assets/images/banners/banner3.jpg'),
  },
  {
    title: 'Holiday Specials – Up to 40% Off!',
    desc: 'Celebrate the season with unbeatable offers on all categories, from clothing to electronics. Stock up for the holidays!',
    call: 'Celebrate and Save',
    img: require('@/assets/images/banners/banner4.jpg'),
  },
  {
    title: 'Free Shipping on Orders Over $100!',
    desc: 'Enjoy free shipping on all orders above $100. Buy more, save more, and enjoy a seamless shopping experience.',
    call: 'Start Shopping',
    img: require('@/assets/images/banners/banner5.jpg'),
  },
];

export default banners;
