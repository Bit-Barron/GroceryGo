import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { AdminQrCodeStore } from "../../../store/admin/AdminQrCode";
import { MdDelete } from "react-icons/md";
import { AdminQrCodeProps } from "@/types/interface";
import { Button } from "@/components/ui/elements/Button";
import QRCodeGenerator from "../../ui/elements/QrCodeGenerator";

interface QrCodeListProps {}

export const QrCodeList: React.FC<QrCodeListProps> = ({}) => {
  const qrCodeStore = useSnapshot(AdminQrCodeStore);

  useEffect(() => {
    qrCodeStore.getQrCodeById();
  }, [qrCodeStore]);

  return (
    <div>
      <div className="">
        {qrCodeStore.qrCode.map((qrcode: AdminQrCodeProps, idx) => (
          <div
            key={idx}
            className="bg-container block cursor-pointer mt-10 hover:!bg-neutral-900"
          >
            <div className={`px-4 py-4 sm:px-6`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <span>Table Number:</span>
                  <p className="truncate font-medium">{qrcode.tableNumber}</p>
                </div>
                <p
                  className={
                    "inline-flex rounded-full px-2 text-xs font-semibold leading-5 text-white"
                  }
                >
                  {qrcode.tableNumber || "no title"}
                </p>
              </div>

              <div>
                <QRCodeGenerator table={qrcode} />
              </div>

              <div className="flex flex-col md:flex md:flex-row md:items-end md:justify-between mt-2">
                <div className="order-1 text-sm text-gray-400 space-y-2">
                  <div
                    onClick={() => {
                      qrCodeStore.deleteQrCodeById(qrcode.id);
                    }}
                  >
                    <MdDelete className="text-xl font-bold text-red-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
