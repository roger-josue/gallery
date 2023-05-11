import Image from "next/image";
import hero from '../public/images/hero-bg.jpg'

export default function Home() {
  return (
    <main className='w-screen min-h-screen text-lightText'>
      <div className='w-screen min-h-screen'>
        {/* Hero where the search bar will go */}
        <div className="relative w-full h-[70vh]">
          <Image src={hero} alt="background hero" fill={true} className="object-cover" />
          <div className="absolute inset-0 bg-bgDark bg-opacity-50 z-10 flex flex-col place-content-center place-items-center gap-4 p-4 md:p-0">
            <h1 className="text-darkText text-left w-full md:w-[700px]">All the high-resolution images from Unsplash that you want to see</h1>
            <p className="text-darkText text-left w-full md:w-[700px]">Find and share with your friends the best high-quality photos</p>
            <input className="p-4 rounded-md w-full md:w-[700px]" type="text" name="search" id="search" placeholder="Search high-resolution pics"/>
          </div>
        </div>
        {/* grid where the infinite scroll will go */}
        <div className='max-w-screen-2xl min-h-[600px] py-10 mx-auto grid grid-cols-3 grid-flow-row gap-6'>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
          <div className="bg-lightText h-96"></div>
        </div>
      </div>
    </main>
  )
}
