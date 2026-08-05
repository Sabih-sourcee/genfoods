export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  title: string;
  hashtags: string[];
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
