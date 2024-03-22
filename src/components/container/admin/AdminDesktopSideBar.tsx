import { useEffect } from "react";

interface AdminDekstopSideBarProps {
  menu: JSX.Element;
}

export const AdminDekstopSideBar: React.FC<AdminDekstopSideBarProps> = ({
  menu,
}) => {
  useEffect(() => {}, []);

  return (
    <div className="hidden lg:fixed text-white bg-adminContainer lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-grow flex-col overflow-y-auto hover:duration-150">
        <h1 className="py-4 px-4  bg-primary text-2xl font-semibold text-white">
          {process.env.NEXT_PUBLIC_BRAND_NAME}
        </h1>
        <nav
          className="flex flex-1 flex-col overflow-y-auto"
          aria-label="Sidebar"
        >
          {menu}
        </nav>
      </div>
    </div>
  );
};
