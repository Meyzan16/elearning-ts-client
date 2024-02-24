'use client';

import "../styles/globals.css";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import AosInit from "../components/Aos/AosInit";
import GlobalState from '@/context'
import {Toaster} from  'react-hot-toast'; 
import { Providers } from "./provider";
import { SessionProvider } from "next-auth/react";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { Loading } from "@/components/Loading/page";

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
                <Custom>{children}</Custom>
            </GlobalState>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

const Custom: React.FC<{children: React.ReactNode}> = ({children}) => {
  const {isLoading} = useLoadUserQuery({});
  return (
    <>
    {
      isLoading ? <Loading /> : <>{children}</>
    }
    </>
  )
}