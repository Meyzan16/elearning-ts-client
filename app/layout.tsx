"use client";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import AosInit from "../components/UI/Aos/AosInit";
import GlobalState from "@/context";
import { Providers } from "./provider";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/pages/home/Header";
import { ProtectedUrl } from "./hooks/useProtectedUrl";

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

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <AosInit />
      <body
        className={`${poppins.variable} ${josefin.variable} bg-slate-50 bg-no-repeat`}
      >
        <Providers>
          <SessionProvider >
            <GlobalState>
              <Header />
              <ProtectedUrl>
                {children}
              </ProtectedUrl>
            </GlobalState>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

// const Custom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { isLoading } = useLoadUserQuery({});
//   return isLoading ? <Loading /> : <>{children}</>;
// };
