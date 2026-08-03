export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  category: 'Gummies' | 'Sour' | 'Fruit Chews';
  bgColor: string;
  image: string;
  rating: number;
  reviewsCount: number;
  weight: string;
  ingredients: string[];
  calories: string;
  sugar: string;
  halalCertified: boolean;
  noArtificialColors: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface StoreLocation {
  id: string;
  name: string;
  city: 'Karachi' | 'Lahore' | 'Islamabad' | 'Rawalpindi' | 'Faisalabad' | 'Multan';
  area: string;
  address: string;
  phone: string;
  hours: string;
  inStock: boolean;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}
