"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Toaster } from "sonner";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { AuthStore } from "@/store/AuthStore";
import { useSnapshot } from "valtio";

interface pageProps {
  email: String;
  password: String;
}

const Page: React.FC<pageProps> = ({ email, password }) => {
  const authStore = useSnapshot(AuthStore);

  return (
    <form onSubmit={(e) => authStore.login(e)}>
      <Toaster />
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
        <Button className="w-full" variant="outline">
          have an account? Login
        </Button>
      </div>
    </form>
  );
};

export default Page;
