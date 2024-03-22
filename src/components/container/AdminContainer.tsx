"use client";

import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxExit } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { AdminStore } from "@/store/admin/AdminStore";
import { useSnapshot } from "valtio";
import { AdminMobileSideBar } from "./admin/AdminMobileSideBar";
import { AdminDekstopSideBar } from "./admin/AdminDesktopSideBar";
import { AdminSearchBar } from "./admin/AdminSearchBar";
import { AdminTabType } from "@/types/store";
import axios from "axios";
import cookie from "cookie";

interface AdminContainerProps {
  children: React.ReactNode;
}

export const AdminContainer: React.FC<AdminContainerProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
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
        console.log(response);
        return response;
      } catch (error) {
        return router.push("/login");
      }
    };
    fetchAdminTabs();
  }, [router]);

  const menuProducts = (
    <>
      <div className="flex flex-col flex-1 mt-10">
        {adminStore.adminTabs.map(({ name, current, Icon }, idx) => (
          <button
            key={idx}
            onClick={() => {
              AdminStore.setAdminTab(name as AdminTabType);
            }}
            className={`${
              current &&
              "border-primary border-l-4 border-b-1 border-b-gray-600"
            } flex items-center p-6 text-sm border-b border-gray-600`}
            aria-current={current ? "page" : undefined}
          >
            <Icon className="mr-4 h-5 w-5" />
            {name}
          </button>
        ))}
      </div>
      <div className="text-center p-3 hover:shadow-gray-800 hover:shadow-xl border-t justify-between hover:bg-gray-800 border-gray-700 flex duration-200">
        <RxExit
          className="mt-2 text-xl"
          onClick={() => {
            router.push("/auth/login");
          }}
        />
      </div>
    </>
  );

  return (
    <>
      <div className="min-h-full w-full">
        <AdminMobileSideBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          menuProducts={menuProducts}
        />
        <AdminDekstopSideBar menu={menuProducts} />
        <div className="flex flex-1 flex-col lg:pl-64">
          <div className="flex h-16 w-full flex-shrink-0 bg-primary border-b">
            <button
              className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-main lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
            </button>
            <AdminSearchBar />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
