import { proxy } from "valtio";
import axios from "axios";
import cookie from "cookie";
import { toast } from "sonner";
import { FormEvent } from "react";

export type AdminQrCodeStore = typeof AdminQrCodeStore;

export const AdminQrCodeStore = proxy({
  subpage: "list",
  setSubpage: (subpage: "list" | "upsert") => {
    AdminQrCodeStore.subpage = subpage;
  },

  tableNumber: "",
  setTableNumber: (tableNumber: string) => {
    AdminQrCodeStore.tableNumber = tableNumber;
  },
  createdAt: "",
  setCreatedAt: (createdAt: string) => {
    AdminQrCodeStore.createdAt = createdAt;
  },

  image: "",
  setImage: (image: string) => {
    AdminQrCodeStore.image = image;
  },

  dotsOptions: "",
  setDotsOptions: (dotsOptions: string) => {
    AdminQrCodeStore.dotsOptions = dotsOptions;
  },

  qrCode: [],
  setQrCode: (qrCode: any) => {
    AdminQrCodeStore.qrCode = qrCode;
  },

  backgroundColor: "",
  setBackgroundColor: (backgroundColor: string) => {
    AdminQrCodeStore.backgroundColor = backgroundColor;
  },

  createQrCode: async (e: FormEvent) => {
    e.preventDefault();
    try {
      const cookies = cookie.parse(document.cookie);
      const userId = cookies["userId"];

      const qrCode = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/createQrCode`,
        {
          tableNumber: AdminQrCodeStore.tableNumber,
          backgroundColor: AdminQrCodeStore.backgroundColor,
          dotsOptions: AdminQrCodeStore.dotsOptions,
          userId: userId,
        }
      );

      window.location.reload();

      toast.success("Qr Code Created Successfully");
      return qrCode;
    } catch (err) {
      toast.error("Error Creating Qr Code");
      console.error(err);
    }
  },

  getQrCodeById: async () => {
    const getUserId = cookie.parse(document.cookie);
    const userId = getUserId["userId"];

    try {
      const qrCode = await axios.get(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/getQrCodeById/${userId}`
      );

      console.log(qrCode.data);

      AdminQrCodeStore.setQrCode(qrCode.data);
      return qrCode;
    } catch (err) {
      console.error(err);
    }
  },

  deleteQrCodeById: async (id: number) => {
    try {
      const qrCode = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/deleteQrCodeById/${id}`
      );

      toast.success("Qr Code Deleted Successfully");

      window.location.reload();
      return qrCode;
    } catch (err) {
      toast.error("Error Deleting Qr Code");
      console.error(err);
    }
  },
});
