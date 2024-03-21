import { FormEvent, useEffect } from "react";
import { proxy, useSnapshot } from "valtio";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

interface userProps {
  id: string;
  email: string;
  password: string;
}

export type AuthStore = typeof AuthStore;

export const AuthStore = proxy({
  email: "admin@admin.de",
  password: "",
  confirmPassword: "",
  authInputType: "password",
  displayPassword: false,
  toggleDisplayPassword: () => {
    AuthStore.displayPassword = !AuthStore.displayPassword;
  },

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

      console.log(registerUser);

      return toast.success("Registration successful");
    } catch (err) {
      return toast.error("User already exists");
    }
  },

  login: async (e: FormEvent) => {
    e.preventDefault();

    try {
      const loginUser: userProps = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/login`,
        {
          email: AuthStore.email,
          password: AuthStore.password,
        }
      );

      console.log(loginUser);

      return toast.success("Login successful");
    } catch (err) {
      return toast.error("Invalid email or password. Please try again");
    }
  },
});
