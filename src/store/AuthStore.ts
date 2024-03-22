import { FormEvent } from "react";
import { proxy } from "valtio";
import axios from "axios";
import { toast } from "sonner";

interface userProps {
  id: string;
  email: string;
  password: string;
}

export type AuthStore = typeof AuthStore;

export const AuthStore = proxy({
  email: "admin@admin.de",
  password: "admin1",
  confirmPassword: "admin1",
  authInputType: "password",

  register: async (e: FormEvent) => {
    e.preventDefault();

    if (AuthStore.password.length < 6) return toast.error("Password too short");

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
    } catch (err: any) {
      return toast.error("An error occured");
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

      return toast.success("Login successful");
    } catch (err) {
      return toast.error("Invalid credentials");
    }
  },
});
