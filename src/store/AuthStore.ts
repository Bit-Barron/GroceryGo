import { FormEvent, useEffect } from "react";
import { proxy, useSnapshot } from "valtio";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { toast } from "sonner";

interface userProps {
  id: string;
  email: string;
  password: string;
}

export type AuthStore = typeof AuthStore;

export const AuthStore = proxy({
  email: "admin@admin.de",
  password: "admin",
  confirmPassword: "admin",
  authInputType: "password",
  displayPassword: false,
  toggleDisplayPassword: () => {
    AuthStore.displayPassword = !AuthStore.displayPassword;
  },

  register: async (e: FormEvent) => {
    e.preventDefault();
    if (AuthStore.password !== AuthStore.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const registerUser: userProps = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/auth/register`,
        {
          email: AuthStore.email,
          password: AuthStore.password,
          withCredentials: true,
        }
      );

      if (!registerUser) {
        return toast.error("Something went wrong. Please try again.");
      }

      if (registerUser.id) {
        toast.success("Registration successful");
      }
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }
  },

  Login: async (e: FormEvent) => {
    const router = useRouter();
    e.preventDefault();

    try {
      const loginUser: userProps = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/auth/login`,
        {
          email: AuthStore.email,
          password: AuthStore.password,
        }
      );

      if (!loginUser) {
        return toast.error("Invalid email or password");
      }

      if (loginUser.id) {
        toast.success("Login successful");
        return router.push("/admin");
      }
      return router.push("/");
    } catch (err) {
      const error = err as AxiosError;
      toast.error("Invalid email or password");
      console.log(error);
    }
  },
});

export const DisplayPassword = () => {
  const authStore = useSnapshot(AuthStore);

  useEffect(() => {
    AuthStore.authInputType = authStore.displayPassword ? "text" : "password";
  }, [authStore.displayPassword]);

  // change icon here
};
