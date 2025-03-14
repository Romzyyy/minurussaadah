import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavbarComponent from '@/components/Navbar'
import FooterComponent from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Yayasan Nurus Sa’adah',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' className='!scroll-smooth'>
            <body className={inter.className}>
                <NavbarComponent />
                {children}
                <FooterComponent />
            </body>
        </html>
    )
}
