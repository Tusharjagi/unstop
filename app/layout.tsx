import React, { JSX } from "react";
import type { Metadata } from "next";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "Unstop",
  description: "unstop assessment",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
