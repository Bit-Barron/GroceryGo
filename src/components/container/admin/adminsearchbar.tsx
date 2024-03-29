import { AuthStore } from "@/store/AuthStore";
import React from "react";
import { useRouter } from "next/navigation";
import { useSnapshot } from "valtio";

interface AdminSearchBarProps {}

export const Searchbar: React.FC<AdminSearchBarProps> = ({}) => {
  const router = useRouter();
  const authStore = useSnapshot(AuthStore);

  return (
    <div className="flex w-full justify-end px-4">
      <button onClick={() => {
        authStore.logout()
        router.push("/auth/login")
      }}>Logout</button>
    </div>
  );
};
