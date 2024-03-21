"use client";

import React from "react";
import { AdminContainer } from "@/components/container/AdminContainer";
import { useSnapshot } from "valtio";
import { AdminStore } from "@/store/admin/AdminStore";
import { AdminDashboard } from "@/components/pages/Dashboard/AdminDashboard";
import { AdminProducts } from "@/components/pages/Products/AdminProducts";
import { AdminCategories } from "@/components/pages/Categories/AdminCategories";
import { AdminSettings } from "@/components/pages/Settings/AdminSettings";
import { AdminQRCode } from "@/components/pages/QR-Code/AdminQR-Code";
import { AdminOrderList } from "@/components/pages/Order/AdminOrderList";
import { AdminOrderHistoryList } from "@/components/pages/Order-History/AdminOrder-HistoryList";

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
