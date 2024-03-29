import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/component/navbar'
import Footer from '@/components/component/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Warong Daging',
  description: 'Toko daging berkualitas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
