import Footer from '@/components/footer'
import './globals.css'
import { Roboto_Flex, Roboto_Slab } from 'next/font/google'

const robotoFlex = Roboto_Flex({ subsets: ['latin'], display: 'swap', variable: '--font-roboto-flex', weight: ['100','200','300','400','500','600','700','800','900'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'], display: 'swap', variable: '--font-roboto-slab', weight: ['100','200','300','400','500','600','700','800','900'] })

export const metadata = {
  title: 'Gallery',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.variable} ${robotoSlab.variable} bg-bgLight`}>
        {children}
        <Footer />
        </body>
    </html>
  )
}
