export interface ProductsProps {
  description: string;
  title: string;
  smallDescription: string;
  price: string;
  createdAt: string;
  userId: number;
  discount: string;
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
}
