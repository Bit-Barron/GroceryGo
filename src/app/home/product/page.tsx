"use client";

import cookie from "cookie";
import { useEffect } from "react";
import React from "react";

interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
  useEffect(() => {
    const extractParamsAndSaveAsCookies = () => {
      const url = new URL(window.location.href);
      const tablenumber = url.searchParams.get("tablenumber");
      const restaurantid = url.searchParams.get("restaurantid");

      if (tablenumber && restaurantid) {
        document.cookie = cookie.serialize("tablenumber", tablenumber);
        document.cookie = cookie.serialize("restaurantid", restaurantid);
      }

      url.searchParams.delete("tablenumber");
      url.searchParams.delete("restaurantid");
      const cleanedURL = url.toString();

      window.location.href = cleanedURL;
    };

    if (location.search) {
      extractParamsAndSaveAsCookies();
    }
  }, []);

  return (
    <div>
      <div>asd</div>
    </div>
  );
};

export default Page;
