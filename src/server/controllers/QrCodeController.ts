import { Elysia } from "elysia";
import { createQrCode } from "../services/QrCodeService";
import { AdminQrCodeProps } from "@/types/interface";
import { getQrCodeById } from "../services/QrCodeService";

export let QrCodeController = new Elysia();

QrCodeController.post("/createQrCode", ({ body }) => {
  return createQrCode(body as AdminQrCodeProps);
});

QrCodeController.get("/getQrCodeById/:userId", ({ params: { userId } }) => {
  return getQrCodeById({ userId });
});
