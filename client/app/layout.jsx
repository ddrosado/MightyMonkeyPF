import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MightyMonkeyClub',
  description: 'club monito',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>navbar</h1>
        <ul>
        <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/actividades">Actividades</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  )
}
