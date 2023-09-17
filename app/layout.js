import './globals.css'
import { Open_Sans } from 'next/font/google'
// pages
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js E-commerce Teması',
  description: 'Next.js E-commerce Teması, Gökhan Demir',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className={openSans.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}