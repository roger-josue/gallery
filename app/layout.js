import Image from "next/image";
import { Roboto_Flex, Roboto_Slab } from 'next/font/google'
import Footer from '@/components/footer'
import './globals.css'
import { getHeroPhoto } from "@/unsplash/unsplashAPI";
import Search from "@/components/Search";

const robotoFlex = Roboto_Flex({ subsets: ['latin'], display: 'swap', variable: '--font-roboto-flex', weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'], display: 'swap', variable: '--font-roboto-slab', weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'Gallery',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {


  //fetching directly from the Unsplash API
  const heroData = await getHeroPhoto();
  const hero = await heroData.response;

  return (
    <html lang="en">
      <body className={`${robotoFlex.variable} ${robotoSlab.variable} bg-bgLight`}>
        <div className='w-screen min-h-screen text-gray-500'>
          <div className="relative w-full h-[70vh]">
            <div className="absolute w-full h-full bg-gray-300">
              <Image priority src={`${hero.urls.full}&fm=jpg&fit=max`} alt="background hero" fill={true} className="object-cover" />
            </div>
            <a
              className="absolute z-20 text-lg bottom-2 left-2 opacity-95 focus:text-primary hover:text-primary"
              target="_blank"
              href={`https://unsplash.com/@${hero.user.username}`}
            >
              Photo by {hero.user.username}
            </a>
            <Search />
          </div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
