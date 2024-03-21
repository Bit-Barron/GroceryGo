export interface Products {
  id: number;
  description: string;
  status: boolean;
  title: string;
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
