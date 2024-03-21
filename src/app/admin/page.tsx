"use client";

import React from "react";
import { AdminContainer } from "@/components/container/AdminContainer";
import { useSnapshot } from "valtio";
import { AdminStore } from "@/store/admin/AdminStore";
import { AdminDashboard } from "@/components/pages/Dashboard/Dashboard";
import { AdminProducts } from "@/components/pages/Products/Products";
import { AdminCategories } from "@/components/pages/Categories/Categories";
import { AdminSettings } from "@/components/pages/Settings/AdminSettings";
import { AdminQRCode } from "@/components/pages/QR-Code/QrCode";
import { AdminOrderList } from "@/components/pages/Order/OrderList";
import { AdminOrderHistoryList } from "@/components/pages/Order-History/HistoryList";

interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
  const adminStore = useSnapshot(AdminStore);

  const currentTab = adminStore.adminTabs.find((tab) => tab.current);

  return (
    <AdminContainer>
      {currentTab?.name === "Dashboard" && <AdminDashboard />}
      {currentTab?.name === "Products" && <AdminProducts />}
      {currentTab?.name === "Categories" && <AdminCategories />}
      {currentTab?.name === "Create QR-Code" && <AdminQRCode />}
      {currentTab?.name === "Order" && <AdminOrderList />}
      {currentTab?.name === "Order History" && <AdminOrderHistoryList />}
      {currentTab?.name === "Settings" && <AdminSettings />}
    </AdminContainer>
  );
};

export default Page;
