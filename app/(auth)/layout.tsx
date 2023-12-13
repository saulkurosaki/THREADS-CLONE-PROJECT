import React from "react";

import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads App.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-screen bg-dark-1">
      {children}
    </div>
  );
}
