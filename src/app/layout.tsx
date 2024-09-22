import { ClerkProvider } from "@clerk/nextjs";

import "~/styles/globals.css";
import { Montserrat } from 'next/font/google';
import React from "react";
export const metadata = {
  title: "Prep My Mealy",
  description:
    "Prep My Mealy is a meal planning app that helps you plan your meals for the week.",
};



const montserrat = Montserrat({
  display: "swap",
  subsets:['latin-ext'],
  weight: ['100' , '200' , '300' , '400' , '500' , '600' , '700' , '800' , '900'],
  style: ['normal', 'italic'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider polling={true}>
      <html lang="en" className={montserrat.className}>
        <body>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
