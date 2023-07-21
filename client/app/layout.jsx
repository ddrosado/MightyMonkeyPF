"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "../components/navBar/Navbar";
import Footer from "../components/footer/Footer";
import {usePathname} from "next/navigation"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MightyMonkeyClub",
  description: "club monito",
};

export default function RootLayout({ children }) {

  const  path = usePathname()

  return (
    <html lang="en">
      <body className={inter.className}>
        {path !== "/login"? <Navbar /> : null }
        {children}
        {path !== "/login"? <Footer /> : null }
      </body>
    </html>
  );
}
