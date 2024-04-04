"use client";

import React from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { Toaster } from "sonner";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { AuthStore } from "@/store/AuthStore";
import { useSnapshot } from "valtio";

interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
  const authStore = useSnapshot(AuthStore);
  const router = useRouter();

  return (
    <form onSubmit={(e) => authStore.login(e)}>
      <h1 className="font-bold text-2xl text-center mt-7">Login</h1>
      <div className="mt-10 space-y-5">
        <Input
          Icon={FaRegUser}
          type="email"
          placeholder="Email"
          value={authStore.email}
          onChange={(e) => (AuthStore.email = e.target.value)}
          required
        />
        <Input
          Icon={RiLockPasswordLine}
          type="password"
          placeholder="Password"
          onChange={(e) => (AuthStore.password = e.target.value)}
          value={authStore.password}
          required
        />

        <Button className="w-full text-white">Login</Button>

        <div className="relative">
          <p className="absolute left-1/2 top-1/2 mt-1 -translate-x-1/2 -translate-y-1/2 transform px-2 text-xs">
            OR
          </p>
        </div>

        <button
          className="w-full rounded bg-submitAltButton py-2.5 text-white shadow-md"
          onClick={() => {
            router.push("/register");
          }}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Page;
