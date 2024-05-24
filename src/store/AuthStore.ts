import { FormEvent } from "react";
import { proxy } from "valtio";
import axios from "axios";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { AuthProps } from "@/types/interface";

export type AuthStore = typeof AuthStore;

export const AuthStore = proxy({
  email: "admin@admin.de",
  password: "admin1234",
  confirmPassword: "admin1234",
  authInputType: "password",

  register: async (e: FormEvent) => {
    e.preventDefault();

    if (AuthStore.password.length < 6) return toast.error("Password too short");

    try {
      const registerUser: AuthProps = await axios.post(
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
        window.location.href = "/login";
        return toast.success("Succesfully created an account");
      }
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response && axiosError.response.status === 500) {
        return toast.error("user already exists");
      }
      return toast.error("An error occurred");
    }
  },

  login: async (e: FormEvent) => {
    e.preventDefault();

    try {
      const loginUser: AuthProps = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/login`,
        {
          email: AuthStore.email,
          password: AuthStore.password,
        }
      );

      window.location.href = "/admin";
      return toast.success("Login successful");
    } catch (err) {
      return toast.error("Invalid credentials");
    }
  },

  logout: async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/logout`);
      return toast.success("Logout successful");
    } catch (err) {
      return toast.error("An error occured");
    }
  },
});
