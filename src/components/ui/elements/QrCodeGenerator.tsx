import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import { useRouter } from "next/navigation";
import { AdminQrCodeProps } from "@/types/interface";
import cookie from "cookie";

interface QRCodeGeneratorProps {
  table: AdminQrCodeProps;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ table }) => {
  const qrCodeRef = useRef<null>(null);
  const qrCodeInstanceRef = useRef<any>(null);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const router = useRouter();

  const cookies = cookie.parse(document.cookie);
  const userId = cookies["userId"];

  useEffect(() => {
    qrCodeInstanceRef.current = new QRCodeStyling({});
    const qrCodeInstance = qrCodeInstanceRef?.current;
    if (qrCodeRef.current && qrCodeInstance) {
      qrCodeInstance.update({
        data: `http://localhost:3000/home/product?restaurantid=${userId}&tablenumber=${table.tableNumber}`,

        height: 100,
        width: 100,
        imageOptions: {
          imageSize: 0.5,
        },
        backgroundOptions: {
          color: table.backgroundColor,
        },
        type: "svg",
      });
      qrCodeInstance.append(qrCodeRef.current);
    }

    return () => {
      if (qrCodeInstance) {
        qrCodeInstance.update({
          data: "",
        });
      }
    };
  }, [table.backgroundColor, table.tableNumber, userId]);

  useEffect(() => {
    if (scannedData) {
      const scannedURL = new URL(scannedData);
      const path = scannedURL.pathname;
      if (path === "/order") {
        return router.push(scannedData);
      }
    }
  }, [scannedData, router]);

  const simulateQRCodeScan = () => {
    console.log("Simulating QR-Code scan");
    const generatedLink = `http://localhost:3000/home/product?restaurantid=${userId}&tablenumber=${table.tableNumber}`;
    setScannedData(generatedLink);
    return router.push(`http://localhost:3000/home/product?restaurantid=${userId}&tablenumber=${table.tableNumber}`);
  };

  return (
    <div>
      <div className="mt-10">
        <div ref={qrCodeRef} />
      </div>
      <button onClick={() => simulateQRCodeScan()}>QR-Code scannen (Simuliert)</button>
      <p>
        Scanned Data:
        {scannedData}
      </p>
    </div>
  );
};

export default QRCodeGenerator;
