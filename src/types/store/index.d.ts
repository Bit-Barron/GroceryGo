export type AdminTabType =
  | "Dashboard"
  | "Order"
  | "Products"
  | "Create QR-Code"
  | "Categories"
  | "Upload Menu Cart"

export type AdminTab = {
  Icon: IconType;
  current: boolean;
  name: string;
};
