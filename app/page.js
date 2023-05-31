import Image from "next/image";
import ImageGrid from "@/components/imageGrid";
import { getHeroPhoto } from "@/unsplash/unsplashAPI";

// async function getPhotos(page = 1) {
//   const res = await fetch(`${process.env.API_BASE_URL}?page=${page}`);

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }

export default async function Home() {

  //fetching directly from the UnsplashApi
  const heroData = await getHeroPhoto();
  const hero = await heroData.response;

  return (
    <main className='w-screen min-h-screen text-gray-500'>
      <div className='w-screen min-h-screen'>
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
          <div className="absolute inset-0 bg-bgDark bg-opacity-50 z-10 flex flex-col place-content-center place-items-center gap-4 p-4 md:p-0">
            <h1 className="text-left w-full md:w-[700px]">All the high-resolution images that you want to see</h1>
            <p className="text-left w-full md:w-[700px]">Find and share with your friends the best high-quality photos</p>
            <input className="p-4 text-xl rounded-md w-full md:w-[700px] outline-none opacity-80 transition-all duration-500 focus:ring ring-offset-2 ring-primary focus:opacity-100" type="text" name="search" id="search" placeholder="Search high-resolution pics" />
          </div>
        </div>
        <ImageGrid />
      </div>
    </main>
  )
}
