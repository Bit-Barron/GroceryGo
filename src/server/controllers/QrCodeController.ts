import { Elysia } from "elysia";
import { createQrCode } from "../services/QrCodeService";
import { AdminQrCodeProps } from "@/types/interface";

export let QrCodeController = new Elysia();

QrCodeController.post("/createQrCode", ({ body }) => {
  return createQrCode(body as AdminQrCodeProps);
});
