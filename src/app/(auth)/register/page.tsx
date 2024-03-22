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
import { GiConfirmed } from "react-icons/gi";

interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
  const router = useRouter();
  const authStore = useSnapshot(AuthStore);

  return (
    <form onSubmit={(e) => authStore.register(e)}>
      <Toaster />
      <h1 className="font-bold text-2xl text-center mt-7">Register</h1>
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
        <Input
          Icon={GiConfirmed}
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => (AuthStore.confirmPassword = e.target.value)}
          value={authStore.confirmPassword}
          required
        />
        <Button
          className="w-full text-white"
          type="submit"
          onClick={(e) => authStore.register(e)}
        >
          Register
        </Button>

        <div className="text-center">OR</div>

        <Button
          type="button"
          className="w-full"
          variant="outline"
          onClick={() => router.push("/login")}
        >
          have an account? Login
        </Button>
      </div>
    </form>
  );
};

export default Page;
