export interface ProductsProps {
  description: string;
  status: boolean;
  title: string;
  image?: string;
  smallDescription: string;
  price: string;
  createdAt: string;
}

export interface Categories {
  id: number;
  title: string;
}
export interface AuthProps {
  email: string;
  confirmPassword: string;
  password: string;
  confirmPassword?: string;
  token?: string;
}
