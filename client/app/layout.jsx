"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "../components/navBar/Navbar";
import Footer from "../components/footer/Footer";
import { usePathname} from "next/navigation"
import { ReduxProvider } from "../redux/provider";
import Whatsapp from "../components/whatsapp/Whatsapp";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const path = usePathname()

  return (
    <html lang="en">
      <body className={inter.className}>
        {path !== "/" && !path.startsWith("/dashboard")  ? <Navbar /> : null }
        <ReduxProvider>{children}</ReduxProvider>
        <Whatsapp />
        {path !== "/"? <Footer /> : null }
      </body>
    </html>
  );
}
