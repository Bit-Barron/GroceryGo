"use client";

import { useEffect, useState } from "react";
import { UploadMenu } from "../pages/uploadmenu/UploadMenu";
import { AiOutlineMenu } from "react-icons/ai";
import { Searchbar } from "../elements/admin/seachbar";
import { DesktopSidebar } from "../elements/admin/desktopsidebar";
import { MobileSidebar } from "../elements/admin/mobilesidebar";
import { AdminStore } from "@/store/admin/AdminStore";
import { AuthStore } from "@/store/AuthStore";
import { useRouter } from "next/navigation";
import { useSnapshot } from "valtio";
import { AdminTabType } from "@/types/store";
import { RxExit } from "react-icons/rx";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Products } from "../pages/products/Product";
import { Categories } from "../pages/categories/Category";
import { OrderHistory } from "../pages/orderhistory/Order";
import { QrCode } from "../pages/qrcode/QrCode";
import cookie from "cookie";
import axios from "axios";

interface AdminContainerProps {}

export const Container: React.FC<AdminContainerProps> = ({}) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const adminStore = useSnapshot(AdminStore);
  const authStore = useSnapshot(AuthStore);
  const router = useRouter();

  const logout = () => {
    authStore.logout();
    return router.push("/login");
  };

  const menuProducts = (
    <>
      <div className="flex flex-col flex-1 mt-10">
        {adminStore.adminTabs.map(({ name, current, Icon }, idx) => (
          <button
            key={idx}
            onClick={() => adminStore.setAdminTab(name as AdminTabType)}
            className={`${
              current &&
              "border-primary border-l-4 border-b-1 border-b-gray-600"
            } flex items-center p-6 text-sm hover:bg-secondary border-b border-gray-600`}
            aria-current={current ? "page" : undefined}
          >
            <Icon className="mr-4 h-5 w-5" />
            {name}
          </button>
        ))}
      </div>
      <div className="text-center p-3 hover:shadow-gray-800 hover:shadow-xl border-t justify-between hover:bg-gray-800 border-gray-700 flex duration-200">
        <div className="font-bold text-lg">
          <div>{process.env.NEXT_PUBLIC_BRAND_NAME}</div>
        </div>
        <RxExit className="mt-2 text-xl" onClick={() => logout()} />
      </div>
    </>
  );

  useEffect(() => {
    const verifyToken = async () => {
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
    verifyToken();
  }, [router]);

  const currentTab = adminStore.adminTabs.find((tab) => tab.current);

  return (
    <>
      <div className="min-h-full w-full">
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          menuProducts={menuProducts}
        />
        <DesktopSidebar menu={menuProducts} />
        <div className="flex flex-1 flex-col lg:pl-64">
          <div className="flex h-16 w-full flex-shrink-0 border-b bg-container lg:border-none">
            <button
              className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-main lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
            </button>
            <Searchbar />
          </div>
          {currentTab?.name === "Dashboard" && <Dashboard />}
          {currentTab?.name === "Products" && <Products />}
          {currentTab?.name === "Categories" && <Categories />}
          {currentTab?.name === "Order History" && <OrderHistory />}
          {currentTab?.name === "Creat QR-Code" && <QrCode />}
          {currentTab?.name === "Upload Menu Cart" && <UploadMenu />}
        </div>
      </div>
    </>
  );
};
