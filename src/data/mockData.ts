import { InstagramPost, StoreLocation, Review } from '../types';

/** Instagram / social posts — images sourced from Gen Foods Instagram exports */
export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    image: '/images/instagram/post-1.jpg',
    title: 'Chocolate Spread',
    caption:
      'Rich, glossy, and made to share. Our chocolate spread is crafted for pure indulgence — natural taste, zero artificial fillers.',
    hashtags: ['GenFoods', 'ChocolateSpread', 'NaturalIngredients', 'PakistaniSweets'],
  },
  {
    id: 'post-2',
    image: '/images/instagram/post-2.jpg',
    title: 'Chew Beans',
    caption:
      'Sort by colour. Save the favourite for last. Or eat it first. Our chew beans are the snack personality test you already know.',
    hashtags: ['GenFoods', 'ChewBeans', 'RealFlavour', 'MadeForPakistan'],
  },
  {
    id: 'post-3',
    image: '/images/instagram/post-3.jpg',
    title: 'Rainbow Sweets',
    caption:
      'A whole spectrum of sweetness. Bold colours, honest flavours, and confectionery Pakistan can actually trust.',
    hashtags: ['GenFoods', 'RainbowCandy', 'QualityFirst', 'HonestFood'],
  },
  {
    id: 'post-4',
    image: '/images/instagram/post-4.jpg',
    title: 'Classic Lollipop',
    caption:
      'Simple. Iconic. Unforgettable. The lollipop that taught advertising how to sell sweetness — reimagined with real fruit flavour.',
    hashtags: ['GenFoods', 'Lollipop', 'RealFruitFlavour', 'FoodFacts'],
  },
  {
    id: 'post-5',
    image: '/images/instagram/post-5.jpg',
    title: 'Citrus Bursts',
    caption:
      'Amrood. Amrus. Khopra. Desi candy flavours hit different — bold, fruity, and unapologetically Pakistani.',
    hashtags: ['GenFoods', 'DesiCandy', 'NaturalFlavours', 'ConfectioneryPakistan'],
  },
  {
    id: 'post-6',
    image: '/images/instagram/post-6.jpg',
    title: 'Fresh Mint',
    caption:
      'One small mint. Whole mouth reset. Real peppermint, nothing artificial — fresh, clean, instant.',
    hashtags: ['GenFoods', 'MintCandy', 'NaturalMint', 'HonestConfectionery'],
  },
];

export const BANNER_IMAGE = '/images/banner.jpeg';

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: '1',
    name: 'Imtiaz Mega',
    city: 'Karachi',
    area: 'Clifton',
    address: 'Imtiaz Super Market, Block 5, Clifton, Karachi',
    phone: '+92 21 111 468 429',
    hours: '9:00 AM – 11:00 PM',
    inStock: true,
  },
  {
    id: '2',
    name: 'Chase Up',
    city: 'Karachi',
    area: 'Gulshan',
    address: 'Chase Up, University Road, Gulshan-e-Iqbal, Karachi',
    phone: '+92 21 3481 1111',
    hours: '10:00 AM – 10:00 PM',
    inStock: true,
  },
  {
    id: '3',
    name: 'Al-Fatah',
    city: 'Lahore',
    area: 'Johar Town',
    address: 'Al-Fatah, Near Emporium Mall, Johar Town, Lahore',
    phone: '+92 42 111 253 282',
    hours: '10:00 AM – 10:00 PM',
    inStock: true,
  },
  {
    id: '4',
    name: 'Metro Cash & Carry',
    city: 'Lahore',
    area: 'Thokar Niaz Baig',
    address: 'Metro, Multan Road, Lahore',
    phone: '+92 42 111 638 760',
    hours: '9:00 AM – 10:00 PM',
    inStock: true,
  },
  {
    id: '5',
    name: 'Safa Gold Mall',
    city: 'Islamabad',
    area: 'F-7',
    address: 'Safa Gold Mall, Jinnah Super Market, F-7 Markaz, Islamabad',
    phone: '+92 51 265 1111',
    hours: '11:00 AM – 10:00 PM',
    inStock: true,
  },
  {
    id: '6',
    name: 'Utility Stores',
    city: 'Rawalpindi',
    area: 'Saddar',
    address: 'Utility Stores Corporation, Bank Road, Saddar, Rawalpindi',
    phone: '+92 51 111 872 872',
    hours: '9:00 AM – 8:00 PM',
    inStock: true,
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Ayesha Khan',
    role: 'Mom of two, Karachi',
    comment:
      'Finally a local brand that feels premium. The colours are fun and I actually trust what goes into these sweets.',
    rating: 5,
    image: '/images/instagram/post-2.jpg',
  },
  {
    id: 'r2',
    name: 'Hassan Ali',
    role: 'Teacher, Lahore',
    comment:
      'My students go crazy for the citrus flavours. Desi candy done right — bold and nostalgic.',
    rating: 5,
    image: '/images/instagram/post-5.jpg',
  },
  {
    id: 'r3',
    name: 'Sara Ahmed',
    role: 'Parent, Islamabad',
    comment:
      'Love following their Instagram — every post looks delicious. Can\'t wait for full retail rollout.',
    rating: 5,
    image: '/images/instagram/post-1.jpg',
  },
];
