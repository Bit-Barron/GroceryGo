export interface ProductsProps {
  id?: number;
  description: string;
  status: boolean;
  title: string;
  image?: string;
  smallDescription: string;
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
