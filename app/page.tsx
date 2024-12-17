"use client";

import React, { JSX, useEffect } from "react";
import Home from "@/Components/home/index";
import { useRouter } from "next/navigation";

const Page = (): JSX.Element => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const userData = typeof window !== "undefined" && JSON.parse((window.localStorage.getItem("userData") ?? "") || "{}");
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (userData.accessToken) {
      router.push("/auth/login");
    }
  });
  return <Home />;
};

export default Page;
