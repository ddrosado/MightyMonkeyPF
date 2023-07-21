"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "../components/navBar/Navbar";
import Footer from "../components/footer/Footer";
import {redirect, usePathname} from "next/navigation"

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
        {path !== "/"? <Navbar /> : null }
        {children}
        {path !== "/"? <Footer /> : null }
      </body>
    </html>
  );
}
