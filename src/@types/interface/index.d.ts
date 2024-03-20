export interface Products {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  banner: string;
  category: string;
  rating: number;
}

export interface Settings {
  id: string;
  name: string;
  value: string;
}

export interface Orders {
  id: string;
  payment_method: string;
  payment_status: string;
  products: Products[];
  total: number;
}

export interface Categories {
  id: string;
  name: string;
  image: string;
}
