import { Product, StoreLocation, Review } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'fruity-bears',
    name: 'Fruity Bears',
    subtitle: 'Assorted natural fruit juices',
    description: 'Bursting with natural flavor, our Fruity Bears are made with real fruit pulps and 0% artificial food colors. Soft, chewy, and kid-approved!',
    price: 150,
    category: 'Gummies',
    bgColor: '#E0F2F1',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxKjZZM-YiVTxDPv18-0N6ktvOwrbFDfSfbdHwgZpd6TozHyHnsQoj0YqR_fOjuGy-6_18x6hKGukD-OsIivHBG2DrCwkufQ-i_pntH_KnBSbC4PMYvVm9IgHZFGS-es7HLjQPxFxskF299Un-SOxwYKOtpgYuG69HSFaBRiJgSMAx_Svzfe4cGfjTgBTauN9pSDnsYqWcoBq2N-MPI4AlsnRiOSbDpNW42pHlNJg1muG3aMN8Rwmo',
    rating: 4.9,
    reviewsCount: 142,
    weight: '90g',
    ingredients: ['Real Apple Pulp', 'Strawberry Juice Concentrate', 'Pectin', 'Natural Citric Acid', 'Vitamin C'],
    calories: '110 kcal per serving',
    sugar: '12g (All Natural)',
    halalCertified: true,
    noArtificialColors: true
  },
  {
    id: 'sour-worms',
    name: 'Sour Worms',
    subtitle: 'Tangy, tingly sour sugar coating',
    description: 'The perfect kick of tanginess! Covered in a delicate sour dusting that gives way to a sweet fruity center. Loved by kids and adults alike.',
    price: 180,
    category: 'Sour',
    bgColor: '#F1F8E9',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLPK2aWCfLI5b7lkKw635ErdMx4w53Md-tMhWl7ABJBbUWZU-W5WpzqNE-uaTN8ebAeVl-xSs2twcJdVmUMV6qI5EpYm7BK31z8HbE_kvcrYnXEOK-LAc2UEhtFNG-aplpsh6jRDjH2FA0svpBsiYMER_mE7uw0f7437bYR-XQ-uqFpyvz9nqdgsXGAn5wctbag_NNiyovJNxijY19IgGl86bWXvWBQi5-oVFxqCUtZHDO0liIxF_2',
    rating: 5.0,
    reviewsCount: 198,
    weight: '100g',
    ingredients: ['Fruit Juice Extract', 'Malic Acid', 'Pectin', 'Cane Sugar', 'Natural Citrus Extract'],
    calories: '125 kcal per serving',
    sugar: '14g',
    halalCertified: true,
    noArtificialColors: true
  },
  {
    id: 'berry-blast',
    name: 'Berry Blast',
    subtitle: 'Wild berry flavor explosion',
    description: 'A vibrant mix of blueberry, raspberry, and blackberry flavor gummies. Rich in antioxidant-packed berry purees and natural pectin.',
    price: 160,
    category: 'Gummies',
    bgColor: '#F3E5F5',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKIwbFF-CVvSdxBHLm9nX1Jx8d6BHAhoykqD5KFyKg0qsqFn_sgdcf9tpPeUoX9-5aFKpqZxFsS0BTXU77FqJjq03sivQk12yOZ1zn4wZ5IjJ2M0NuzQax2M2LXBsvc0BBFTvtCcZSqeo5-gGnhgIht9Xmnuih_N_hUL2MfRQlL1avR8ICQpHU3J81VRMpztKSQMGQU9-i03ejvKCauivzZgxIJX1r6UFYNkT2MQ8gyOyrR3sh3hbG',
    rating: 4.8,
    reviewsCount: 115,
    weight: '90g',
    ingredients: ['Wild Blackberry Puree', 'Blueberry Extract', 'Citric Acid', 'Pectin', 'Natural Flavors'],
    calories: '115 kcal per serving',
    sugar: '11g',
    halalCertified: true,
    noArtificialColors: true
  },
  {
    id: 'creamy-chews',
    name: 'Creamy Chews',
    subtitle: 'Smooth milk & fruit blend',
    description: 'Mouthwatering soft fruit chews infused with rich, wholesome milk solids for a silky creaminess that melts in your mouth.',
    price: 200,
    category: 'Fruit Chews',
    bgColor: '#FFF3E0',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3HJ3pCmzuUGx0wShIxUbx4qHwVWwmCXYvdz7B5oiOnIHgvM8upV-IW9QAcvYJVHMtM9bxM-zRWrq-PugrTA-m1-TzHcRv2_3BsGtQfTtXBpsxuLgzDh1MnkO4fx_H-ZiYT-ly_WnGMvrvCDHYOthxstHIkhjLOzzkIpQquEj4OJYm83UBbzZrv3ujQCFpiO7i5pu6aHwt18SUVSP6mnYy7Sdf1TEQtd-pbzv8uWMelN7bM4fdi1jC',
    rating: 4.9,
    reviewsCount: 167,
    weight: '110g',
    ingredients: ['Whole Milk Solids', 'Real Mango Pulp', 'Fruit Juice Concentrates', 'Soft Gelatin Free Binder'],
    calories: '135 kcal per serving',
    sugar: '13g',
    halalCertified: true,
    noArtificialColors: true
  },
  {
    id: 'sour-strips',
    name: 'Sour Strips',
    subtitle: 'Zesty rainbow sour ribbons',
    description: 'Flexible, chewy sour ribbons coated with mouth-puckering citrus crystals in rainbow fruit flavors.',
    price: 175,
    category: 'Sour',
    bgColor: '#FFFDE7',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLPK2aWCfLI5b7lkKw635ErdMx4w53Md-tMhWl7ABJBbUWZU-W5WpzqNE-uaTN8ebAeVl-xSs2twcJdVmUMV6qI5EpYm7BK31z8HbE_kvcrYnXEOK-LAc2UEhtFNG-aplpsh6jRDjH2FA0svpBsiYMER_mE7uw0f7437bYR-XQ-uqFpyvz9nqdgsXGAn5wctbag_NNiyovJNxijY19IgGl86bWXvWBQi5-oVFxqCUtZHDO0liIxF_2',
    rating: 4.7,
    reviewsCount: 89,
    weight: '95g',
    ingredients: ['Citric Acid', 'Apple Pulp', 'Malic Acid', 'Natural Colors'],
    calories: '120 kcal',
    sugar: '13g',
    halalCertified: true,
    noArtificialColors: true
  },
  {
    id: 'tropical-chews',
    name: 'Tropical Chews',
    subtitle: 'Guava, mango & passionfruit soft chews',
    description: 'Sunshine in a bag! Exotic tropical fruit pulp blended into ultra-soft chewable squares.',
    price: 190,
    category: 'Fruit Chews',
    bgColor: '#E1F5FE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxKjZZM-YiVTxDPv18-0N6ktvOwrbFDfSfbdHwgZpd6TozHyHnsQoj0YqR_fOjuGy-6_18x6hKGukD-OsIivHBG2DrCwkufQ-i_pntH_KnBSbC4PMYvVm9IgHZFGS-es7HLjQPxFxskF299Un-SOxwYKOtpgYuG69HSFaBRiJgSMAx_Svzfe4cGfjTgBTauN9pSDnsYqWcoBq2N-MPI4AlsnRiOSbDpNW42pHlNJg1muG3aMN8Rwmo',
    rating: 4.9,
    reviewsCount: 104,
    weight: '100g',
    ingredients: ['Guava Puree', 'Mango Pulp', 'Passionfruit Juice', 'Pectin'],
    calories: '128 kcal',
    sugar: '12g',
    halalCertified: true,
    noArtificialColors: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Amina K.',
    role: 'Mother of Two',
    comment: 'Finally, a gummy brand that I feel good about giving to my kids. The ingredients list is so clean compared to everything else on the shelf!',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBauaf45-Ph9kS6hXpDlwPiU2e0GwEfxHc2cZtU_7_ovVXaDh4HiMVc43tJkKyfzPE3GuaRfIqJgl3tiB3Q5LHieZGFi-Npk-sq_G-1pOAdUa7pkYIWlxUkKyV0ySdzj7HU3p8uYL-bRMCkrjdEBAnG3eFBuX2islUp3YgwCXqPlsvk8DvGBrFLbPTZHNS8TFHMvejHPIeAiLo9Vc4tB6cqr_RxTdVisOnHeeANYi_u0rMclDgBNZyF'
  },
  {
    id: 'rev-2',
    name: 'Zaid R.',
    role: 'Home Chef',
    comment: 'The Sour Worms are my absolute favorite. They have just the right amount of tang without being overwhelming. Truly premium quality.',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr2EW9r0dOTCpwYp9IFf4fcCwORpUa37XcLps4sl_rDmrRDw3cySGWwDXSFiLEOKBEn-Llwo_qtkhjf3OWoEquv393gcrY-U5egiETsd6E6bF74P9OlyVgJi1E5ax_UYxyPiMF2p7g2eFe-NhmlKLbCp3Or42DIlkDcwZYGHLWGe-lbIwZdZX3kff8eaC9xootexqhUnCAQLWFGt0UPQ2MszummkejfRwkb_5YAJGVY8FDtA9Tlhdv'
  },
  {
    id: 'rev-3',
    name: 'Fatima S.',
    role: 'Grandmother',
    comment: 'I love supporting a local Pakistani brand that matches international standards. My children won\'t eat any other fruit chews now!',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBifumRH_MOnwTKJ1aHfF9tw3P23IF02CJYqIYfAjc6WycpkaDdvNEoqDTwZrQKTIZQkR4uyBOWhvNIMNnyF0WkyPHsLsbmNp5BQGHoq_1AnnF8bjwA9bKEU7X60KkxPv3jEK13a3i8ULXmsnN9XOt1mcMouM8rYIZ_onetPtTo4vbtHG5slOQoq07el8kjX_rmggsL-yJVJFDU9vXTcIojEu-dkjbiCCZRWlLIOG3xUGeU5_1alhBs'
  }
];

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 'store-1',
    name: 'Imtiaz Super Market - Gulshan',
    city: 'Karachi',
    area: 'Gulshan-e-Iqbal Block 13',
    address: 'Main Rashid Minhas Rd, Block 13 C Gulshan-e-Iqbal, Karachi',
    phone: '+92 21 111 468 429',
    hours: '9:00 AM - 11:30 PM',
    inStock: true
  },
  {
    id: 'store-2',
    name: 'Naheed Superstore',
    city: 'Karachi',
    area: 'Bahadurabad',
    address: 'Siraj-ud-Daula Rd, BMCHS Bahadurabad, Karachi',
    phone: '+92 21 111 624 333',
    hours: '10:00 AM - 11:00 PM',
    inStock: true
  },
  {
    id: 'store-3',
    name: 'Al-Fatah Gourmet Supermarket',
    city: 'Lahore',
    area: 'Gulberg III',
    address: 'MM Alam Rd, Block C1 Gulberg III, Lahore',
    phone: '+92 42 111 253 282',
    hours: '9:00 AM - 12:00 AM',
    inStock: true
  },
  {
    id: 'store-4',
    name: 'Metro Cash & Carry',
    city: 'Lahore',
    area: 'Thokar Niaz Baig',
    address: 'Multan Road, Near Thokar Niaz Baig, Lahore',
    phone: '+92 42 111 786 000',
    hours: '8:00 AM - 11:00 PM',
    inStock: true
  },
  {
    id: 'store-5',
    name: 'Esajee\'s & Co.',
    city: 'Islamabad',
    area: 'F-6 Markaz',
    address: 'Super Market, F-6 Markaz, Islamabad',
    phone: '+92 51 282 1050',
    hours: '10:00 AM - 10:30 PM',
    inStock: true
  },
  {
    id: 'store-6',
    name: 'Greenvalley Premium Hypermarket',
    city: 'Rawalpindi',
    area: 'Bahria Town Phase 7',
    address: 'Mall of Islamabad & Bahria Town Phase 7, Rawalpindi',
    phone: '+92 51 570 7000',
    hours: '9:00 AM - 11:00 PM',
    inStock: true
  }
];
