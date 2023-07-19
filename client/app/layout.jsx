import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "../components/navBar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MightyMonkeyClub",
  description: "club monito",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
