import {ISection} from '@/types/utils/ComponentData';

export default [
  {
    id: '1',
    title: '',
    options: [
      {id: '11', name: 'My Orders', icon: 'Box', navigateTo: 'MyOrders'},
      {
        id: '12',
        name: 'My Reviews',
        icon: 'CommentDots',
        navigateTo: 'MyReviews',
      },
    ],
  },
  {
    id: '2',
    title: 'Account',
    options: [
      {id: '21', name: 'My User Information', icon: 'User'},
      {
        id: '22',
        name: 'My Addresses',
        icon: 'Location',
        navigateTo: 'MyAddresses',
      },
      {id: '23', name: 'My Coupons', icon: 'Coupon', navigateTo: 'MyCoupons'},
      {
        id: '24',
        name: 'My Saved Credit Cards',
        icon: 'CreditCard',
        navigateTo: 'MyCreditCards',
      },
    ],
  },
  {
    id: '3',
    title: 'Agreements',
    options: [
      {
        id: '33',
        name: 'Terms and Conditions',
        icon: undefined,
        navigateTo: 'ModalWebview',
        navigateParams: {url: 'https://reactnative.dev/'},
      },
      {
        id: '34',
        name: 'Our Policy',
        icon: undefined,
        navigateTo: 'ModalWebview',
        navigateParams: {url: 'https://reactnative.dev/'},
      },
    ],
  },
  {
    id: '4',
    title: 'Help',
    options: [
      {
        id: '41',
        name: 'Frequently Asked Questions',
        icon: 'QuestionMark',
        navigateTo: 'FAQ',
      },
      {
        id: '42',
        name: 'Customer Services',
        icon: 'CustomerService',
        navigateTo: 'FAQ',
      },
    ],
  },
] as ISection[];
