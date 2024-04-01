export type AdminTabType =
  | "Dashboard"
  | "Order"
  | "Products"
  | "Create QR-Code"
  | "Categories"
  | "Create Menu"

export type AdminTab = {
  Icon: IconType;
  current: boolean;
  name: string;
};
