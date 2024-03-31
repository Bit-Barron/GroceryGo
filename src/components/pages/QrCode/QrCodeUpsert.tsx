import React, { useEffect, useRef } from "react";
import { AdminQrCodeStore } from "@/store/admin/AdminQrCode";
import QRCodeStyling from "qr-code-styling";

import { AiOutlineSave } from "react-icons/ai";
import { MdDriveFileRenameOutline, MdOutlineColorize } from "react-icons/md";
import { useSnapshot } from "valtio";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createQrCode } from "@/server/services/QrCodeService";

interface AdminTablesUpsertProps {}
const qrCode = new QRCodeStyling({});

export const QrCodeUpsert: React.FC<AdminTablesUpsertProps> = ({}) => {
  const qrCodeStore = useSnapshot(AdminQrCodeStore);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return qrCode.append(ref.current as HTMLDivElement);
  }, []);

  useEffect(() => {
    console.log(qrCodeStore.backgroundColor);
    qrCode.update({
      data: `${qrCodeStore.tableNumber}` || "0",
      dotsOptions: {
        color: qrCodeStore.dotsOptions || "#ffffff",
      },
      backgroundOptions: {
        color: qrCodeStore.backgroundColor,
      },
      imageOptions: {
        imageSize: 0.5,
      },

      type: "svg",
    });
  }, [
    qrCodeStore.dotsOptions,
    qrCodeStore.tableNumber,
    qrCodeStore.backgroundColor,
  ]);

  const buttonActions = (
    <div className="flex justify-end space-x-5 p-1.5 border-gray-700">
      <Button type="submit" Icon={AiOutlineSave}>
        Save
      </Button>
    </div>
  );

  return (
    <form
      className="space-y-8 divide-y divide-gray-700 rounded-md bg-container p-5 text-white"
      onSubmit={(e) => qrCodeStore.createQrCode(e)}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium leading-6">Qr Code</h3>
          <p className="mt-1 max-w-2xl text-sm">
            This Information will be displayed publicly
          </p>
        </div>
      </div>
      <div className="space-y-6">
        <Input
          type={"number"}
          placeholder={"Table Number"}
          name={"Name"}
          id={"Name"}
          Icon={MdDriveFileRenameOutline}
          value={qrCodeStore.tableNumber}
          onChange={(e) => qrCodeStore.setTableNumber(e.target.value)}
          required
        />
        <Input
          placeholder={"Enter background color"}
          type={"color"}
          onChange={(e) => qrCodeStore.setBackgroundColor(e.target.value)}
          value={qrCodeStore.backgroundColor}
          name={"background color"}
          id={"Background Color"}
          Icon={MdOutlineColorize}
        />
        <Input
          placeholder={"Table Dots Color"}
          type={"color"}
          onChange={(e) => qrCodeStore.setDotsOptions(e.target.value)}
          value={qrCodeStore.dotsOptions}
          name={"corner color"}
          id={"Corner Color"}
          Icon={MdOutlineColorize}
        />

        <div ref={ref} />
      </div>
      <div className="p-2">{buttonActions}</div>
    </form>
  );
};
