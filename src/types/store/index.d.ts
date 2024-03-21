export type AdminTabType =
  | "Dashboard"
  | "Order"
  | "Products"
  | "Create QR-Code"
  | "Categories";

export type AdminTab = {
  name: string;
  Icon: IconType;
  current: boolean;
};

export interface AuthProps {
  email: string;
  confirmPassword: string;
  password: string;
}
