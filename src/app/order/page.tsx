"use client";

import React, { useEffect } from "react";
import cookie from "cookie";

interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
  useEffect(() => {
    const extractParamsAndSaveAsCookies = () => {
      const url = new URL(window.location.href);
      const tablenumber = url.searchParams.get("tablenumber");
      const restaurantid = url.searchParams.get("restaurantid");

      if (tablenumber && restaurantid) {
        const tablenumber = cookie.parse(document.cookie);
        const restaurantid = cookie.parse(document.cookie);
      }
    };

    if (location.search) {
      extractParamsAndSaveAsCookies();
    }
  }, []);

  return (
    <div className="!bg-white h-screen">
      <div>asd</div>
      
    </div>
  );
};

export default Page;
