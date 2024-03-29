import { AuthStore } from "@/store/AuthStore";
import React from "react";
import { useRouter } from "next/navigation";
import { useSnapshot } from "valtio";

interface AdminSearchBarProps {}

export const Searchbar: React.FC<AdminSearchBarProps> = ({}) => {
  const authStore = useSnapshot(AuthStore);
  const router = useRouter();

  const logout = () => {
    authStore.logout();
    return router.push("/login");
  };

  return (
    <div className="flex w-full justify-end px-4">
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};
