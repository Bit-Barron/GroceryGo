import { proxy } from "valtio";
import { AiOutlineHistory, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdCreate  } from "react-icons/io";
import { BiFoodMenu } from "react-icons/bi";
import { BiCategoryAlt } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { AdminTab, AdminTabType } from "../../types/store";

export type AdminStore = {
  adminTabs: AdminTab[];
  setAdminTab: (tab: AdminTabType) => void;
};

const adminStoreProxy = proxy<AdminStore>({
  adminTabs: [
    { name: "Dashboard", Icon: MdDashboardCustomize, current: true },
    { name: "Products", Icon: BiFoodMenu, current: false },
    { name: "Categories", Icon: BiCategoryAlt, current: false },
    { name: "Order", Icon: AiOutlineShoppingCart, current: false },
    { name: "Order History", Icon: AiOutlineHistory, current: false },
    { name: "Create QR-Code", Icon: IoMdCreate, current: false },
    { name: "Settings", Icon: CiSettings, current: false },
  ],
  setAdminTab: (name: AdminTabType) => {
    adminStoreProxy.adminTabs = adminStoreProxy.adminTabs.map((t) => ({
      ...t,
      current: t.name === name,
    }));
  },
});

export { adminStoreProxy as AdminStore };
