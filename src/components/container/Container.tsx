"use client";

import { useEffect } from "react";
import { OrderHistory } from "../pages/orderhistory/order";
import { RxExit } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { AdminStore } from "@/store/admin/AdminStore";
import { useSnapshot } from "valtio";
import axios from "axios";
import Sidebar from "./Sidebar";
import cookie from "cookie";
import { AdminTabType } from "@/types/store";
import { Categories } from "../pages/categories/categorie";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { QrCode } from "../pages/qrcode/QrCode";
import { Products } from "../pages/products/product";

interface AdminContainerProps {}

export const AdminContainer: React.FC<AdminContainerProps> = ({}) => {
  const router = useRouter();
  const adminStore = useSnapshot(AdminStore);

  useEffect(() => {
    const fetchAdminTabs = async () => {
      try {
        const getToken = cookie.parse(document.cookie);
        const token = getToken["token"];
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/validate-token`,
          {
            token,
          }
        );
        return response;
      } catch (error) {
        return router.push("/login");
      }
    };
    fetchAdminTabs();
  }, [router]);

  const logout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/logout`
    );

    if (response.status === 200) return router.push("/login");
  };

  const currentTab = adminStore.adminTabs.find((tab) => tab.current);

  const menuProducts = (
    <>
      {adminStore.adminTabs.map(({ Icon, name }, idx) => (
        <div key={idx}>
          <button onClick={() => adminStore.setAdminTab(name as AdminTabType)}>
            <div className="my-4 inline-block cursor-pointer rounded-lg bg-slate-100 p-3 text-slate-600 hover:bg-gray-300">
              <Icon size={22} />
            </div>
          </button>
        </div>
      ))}
      <div className="text-center p-3 hover:shadow-gray-800 hover:shadow-xl border-t justify-between hover:bg-gray-800 border-gray-700 flex duration-200">
        <RxExit className="mt-2 text-xl" onClick={() => logout()} />
      </div>
    </>
  );

  return (
    <>
      <div className="min-h-full h-screen bg-[#F8F7F9]">
        <Sidebar menu={menuProducts} />
        <div className="flex flex-1 flex-col lg:pl-20">
          {currentTab?.name === "Dashboard" && <Dashboard />}
          {currentTab?.name === "Products" && <Products />}
          {currentTab?.name === "Categories" && <Categories />}
          {currentTab?.name === "Create QR-Code" && <QrCode />}
          {currentTab?.name === "Order" && <OrderHistory />}
        </div>
      </div>
    </>
  );
};
