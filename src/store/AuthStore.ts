import { FormEvent, useEffect } from "react";
import { proxy, useSnapshot } from "valtio";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { redirect, useRouter } from "next/navigation";

interface userProps {
  id: string;
  email: string;
  password: string;
}

export type AuthStore = typeof AuthStore;

export const AuthStore = proxy({
  email: "",
  password: "",
  confirmPassword: "",
  authInputType: "password",

  register: async (e: FormEvent) => {
    e.preventDefault();

    try {
      const registerUser: userProps = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/register`,
        {
          email: AuthStore.email,
          password: AuthStore.password,
          confirmPassword: AuthStore.confirmPassword,
          withCredentials: true,
        }
      );


      // check for an error
      if (registerUser) {
        return toast.success("Succesfully created an account");
      }

    } catch (err) {
      return toast.error("User already exists");
    }
  },

  login: async (e: FormEvent) => {
    e.preventDefault();

    try {
      console.log(AuthStore.email, AuthStore.password);
      const loginUser: userProps = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/login`,
        {
          email: AuthStore.email,
          password: AuthStore.password,
        }
      );

      return toast.success("Login successful");
    } catch (err) {
      console.log(err);
      return toast.error("Invalid credentials");
    }
  },
});
