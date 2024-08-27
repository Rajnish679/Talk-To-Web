"use client";
import { Children, PropsWithChildren } from "react";
import { NextUIProvider } from "@nextui-org/react";

const Providers = ({ children }: PropsWithChildren) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
