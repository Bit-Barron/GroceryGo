import Link from "next/link";

import { GiTripleCorn } from "react-icons/gi";

interface SidebarProps {
  menu: JSX.Element;
}

const Sidebar: React.FC<SidebarProps> = ({ menu }) => {
  return (
    <div className="flex">
      <div className="fixed flex h-screen w-20 flex-col justify-between border-r-[1px] bg-white p-4">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="inline-block rounded-lg bg-blue-500 p-3 text-white">
              <GiTripleCorn size={22} />
            </div>
          </Link>
          <span className="w-full border-b-[1px] border-slate-300 p-2"></span>
          {menu}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
