import { createApi } from "unsplash-js";
import Image from "next/image";
import ImageGrid from "@/components/imageGrid";
// import hero from '../public/images/hero-bg.jpg';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_API_KEY
});

async function getHeroPhoto() {
  try {
    return await unsplash.photos.get({ photoId: "eOpewngf68w" });
  } catch (error) {
    console.log('Something went wrong, Photo could not be fetched!');
  }
}

async function getList(page = 1) {
  try {
    return await unsplash.photos.list({ page, perPage: 6 });
  } catch (error) {
    console.log('Something went wrong, Photos could not be fetched!');
  }
}

export default async function Home() {

  const heroData = await getHeroPhoto();
  const photosData = await getList();
  const hero = await heroData.response;
  const photos = await photosData.response.results;

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
        <ImageGrid photos={photos}  />
      </div>
    </main>
  )
}
