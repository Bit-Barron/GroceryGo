export interface ProductsProps {
  description: string;
  title: string;
  smallDescription: string;
  price: string;
  createdAt: string;
  userId: number;
  discount: string;
  imageId: string;
  category: string;
  createdAt?: string;
  id?: number;
  quantity: number;
}

export interface ShoppingCartProps {
  userId: number;
  productId: number;
  quantity: number;
  createdAt: string;
  price: string;
  id: number;
  paymentMethod: string;
  tableNumber: string;
}

export interface CategoriesProps {
  userId: string;
}

export interface AuthProps {
  id: string;
  email: string;
  password: string;
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
  id: number;
  userId: number;
  tableNumber: string;
  createdAt: string;
  image: string;
  backgroundColor: string;
  dotsOptions: string;
}

export interface OrderProps {
  userId: number;
  productId: number;
  quantity: number;
  tableNumber: string;
  createdAt: string;
  id: number;
  paymentMethod: string;
}

export interface UpdateMenuProps {
  id?: number;
  createdAt?: string;
  imageId: string;
}
