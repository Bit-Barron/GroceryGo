import { AuthStore } from "@/store/AuthStore";
import React from "react";
import { useRouter } from "next/navigation";
import { useSnapshot } from "valtio";

interface AdminSearchBarProps {}

export const AdminSearchBar: React.FC<AdminSearchBarProps> = ({}) => {
  const adminStore = useSnapshot(AuthStore);
  const router = useRouter();

  return (
    <div className="flex w-full justify-end px-4 text-white">
      <button
        onClick={() => {
          router.push("/auth/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};
