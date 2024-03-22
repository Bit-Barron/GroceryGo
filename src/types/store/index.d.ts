export type AdminTabType =
  | "Dashboard"
  | "Order"
  | "Products"
  | "Create QR-Code"
  | "Categories";

export type AdminTab = {
  Icon: IconType;
  current: boolean;
  name: string;
};
