import { AdminQrCodeProps } from "@/types/interface";
import { db } from "../db";
import { QrCodeModel } from "../db/schema";
import { eq } from "drizzle-orm";

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
    console.error(err);
  }
};

export const getQrCodeById = async ({ userId }: any) => {
  try {
    const qrCode = db
      .select()
      .from(QrCodeModel)
      .where(eq(userId, QrCodeModel.userId));

    return qrCode;
  } catch (err) {
    console.error(err);
  }
};

export const deleteQrCodeById = async ({ qrCodeId }: any) => {
  try {
    const qrCode = db.delete(QrCodeModel).where(eq(qrCodeId, QrCodeModel.id));

    return qrCode;
  } catch (err) {
    console.error(err);
  }
};
