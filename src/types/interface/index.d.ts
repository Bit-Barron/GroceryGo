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
}

export interface AuthProps {
  id: string;
  email: string;
  password: string;
}

export type ShoppingCart = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
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
