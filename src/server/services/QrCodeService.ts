import { AdminQrCodeProps } from "@/types/interface";
import { db } from "../db";
import { QrCodeModel } from "../db/schema";

export const createQrCode = async ({
  tableNumber,
  backgroundColor,
  dotsOptions,
  userId,
}: AdminQrCodeProps) => {
  try {
    const qrCode = db.insert(QrCodeModel).values({
      tableNumber,
      createdAt: new Date(),
      backgroundColor,
      dotsOptions,
      userId,
    });

    return qrCode;
  } catch (err) {
    console.log(err);
  }
};
