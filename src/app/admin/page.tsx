"use client";

import React from "react";
import { AdminContainer } from "@/components/container/AdminContainer";
import { useSnapshot } from "valtio";
import { AdminStore } from "@/store/admin/AdminStore";
import { AdminSettings } from "@/components/pages/Settings/AdminSettings";
import { OrderList } from "@/components/pages/Order/OrderList";
import { Dashboard } from "@/components/pages/Dashboard/Dashboard";
import { Products } from "@/components/pages/Products/Products";
import { Categories } from "@/components/pages/Categories/Categories";
import { QrCode } from "@/components/pages/QrCode/QrCode";
import { HistoryList } from "@/components/pages/OrderHistory/HistoryList";

interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
  const adminStore = useSnapshot(AdminStore);

  const currentTab = adminStore.adminTabs.find((tab) => tab.current);

  return (
    <AdminContainer>
      {currentTab?.name === "Dashboard" && <Dashboard />}
      {currentTab?.name === "Products" && <Products />}
      {currentTab?.name === "Categories" && <Categories />}
      {currentTab?.name === "Create QR-Code" && <QrCode />}
      {currentTab?.name === "Order" && <OrderList />}
      {currentTab?.name === "Order History" && <HistoryList />}
      {currentTab?.name === "Settings" && <AdminSettings />}
    </AdminContainer>
  );
};

export default Page;
