interface AdminDekstopSideBarProps {
  menu: JSX.Element;
}

export const DesktopSidebar: React.FC<AdminDekstopSideBarProps> = ({
  menu,
}) => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-grow flex-col overflow-y-auto bg-container">
        <h1 className="bg-container2 py-4 px-4 text-center text-2xl font-semibold text-white">
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
