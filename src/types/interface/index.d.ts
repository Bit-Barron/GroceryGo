export interface ProductsProps {
  description: string;
  title: string;
  smallDescription: string;
  price: string;
  createdAt: string;
  userId: number;
  discount: string;
  imageId: string;
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

export interface AdminQrCodeProps {
  userId: number;
  tableNumber: string;
  createdAt: string;
  image: string;
  backgroundColor: string;
  dotsOptions: string;
}
