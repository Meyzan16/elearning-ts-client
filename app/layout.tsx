'use client';

import "../styles/globals.css";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import AosInit from "../components/Aos/AosInit";
import GlobalState from '@/context'
import {Toaster} from  'react-hot-toast'; 
import { Providers } from "./provider";
import { ThemeProvider } from '@mui/material/styles';
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AosInit />
      <body
        className={`${poppins.variable} ${josefin.variable} bg-slate-50 bg-no-repeat`}
      >
        <Providers>
          <SessionProvider>
            <GlobalState>
                {children}
                <Toaster position="top-center" reverseOrder={false} />
            </GlobalState>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
