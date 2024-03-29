export interface ProductsProps {
  description: string;
  title: string;
  smallDescription: string;
  price: string;
  createdAt: string;
  userId: number;
  discount: string;
}

export interface CategoriesProps {
  id: number;
  title: string;
  description: string;
  userId: number;
  createdAt: string;
}
export interface AuthProps {
  email: string;
  confirmPassword: string;
  password: string;
  confirmPassword?: string;
}
