export interface Service {
  id: string;
  title: string;
  category: 'Hair' | 'Skin' | 'Bridal';
  price: string;
  description: string;
  image: string;
}

export interface Stylist {
  name: string;
  role: string;
  bio: string;
  instagram: string;
  image: string;
}
