import { createApi } from "unsplash-js";
import Image from "next/image";
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
// TODO: Create bidimensional array and implement algorightm to fill infinite grid by columns evenly. 
async function getList(page = 1) {
  try {
    return await unsplash.photos.list({ page, perPage: 3 });
  } catch (error) {
    console.log('Something went wrong, Photos could not be fetched!');
  }
}

export default async function Home() {

  const hero = await (await getHeroPhoto()).response;
  // Implement just one call to fill all columns and make a dynamic pagination from a client component
  const photosCol1 = await (await getList()).response.results;
  const photosCol2 = await (await getList(2)).response.results;
  const photosCol3 = await (await getList(3)).response.results;

  return (
    <main className='w-screen min-h-screen text-gray-500'>
      <div className='w-screen min-h-screen'>
        {/* Hero where the search bar will go */}
        <div className="relative w-full h-[70vh]">
          <Image priority src={`${hero.urls.full}&fm=jpg&fit=max`} alt="background hero" fill={true} className="object-cover" />
          <a
            className="absolute z-20 text-lg bottom-2 left-2 opacity-95"
            target="_blank"
            href={`https://unsplash.com/@${hero.user.username}`}
          >
            Photo by {hero.user.username}
          </a>
          <div className="absolute inset-0 bg-bgDark bg-opacity-40 z-10 flex flex-col place-content-center place-items-center gap-4 p-4 md:p-0">
            <h1 className="text-left w-full md:w-[700px]">All the high-resolution images that you want to see</h1>
            <p className="text-left w-full md:w-[700px]">Find and share with your friends the best high-quality photos</p>
            <input className="p-4 rounded-md w-full md:w-[700px]" type="text" name="search" id="search" placeholder="Search high-resolution pics" />
          </div>
        </div>
        {/* grid where the infinite scroll will go */}
        <div className='max-w-screen-2xl min-h-[600px] py-10 mx-auto sm:px-4 grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6'>
          <div className="flex flex-wrap place-content-start gap-4">
            {
              photosCol1.map(photo => {
                return (
                  <div className="relative bg-gray-300 h-max">
                    <Image width={600} height={800} src={`${photo.urls.regular}&fm=jpg&w=600&fit=max`} alt={photo.user.username} className="opacity-90 " />
                    <a
                      className="absolute text-lg bottom-0 left-2"
                      target="_blank"
                      href={`https://unsplash.com/@${photo.user.username}`}
                    >
                      Photo by {photo.user.username}
                    </a>
                  </div>
                )
              })
            }
          </div>
          <div className="flex flex-wrap place-content-start gap-4">
            {
              photosCol2.map(photo => {
                return (
                  <div className="relative bg-gray-300 h-max">
                    <Image width={600} height={800} src={`${photo.urls.regular}&fm=jpg&w=600&fit=max`} alt={photo.user.username} className="opacity-90 " />
                    <a
                      className="absolute text-lg bottom-0 left-2"
                      target="_blank"
                      href={`https://unsplash.com/@${photo.user.username}`}
                    >
                      Photo by {photo.user.username}
                    </a>
                  </div>
                )
              })
            }
          </div>
          <div className="flex flex-wrap place-content-start gap-4">
            {
              photosCol3.map(photo => {
                return (
                  <div className="relative bg-gray-300 h-max">
                    <Image width={600} height={800} src={`${photo.urls.regular}&fm=jpg&w=600&fit=max`} alt={photo.user.username} className="opacity-90 " />
                    <a
                      className="absolute text-lg bottom-0 left-2"
                      target="_blank"
                      href={`https://unsplash.com/@${photo.user.username}`}
                    >
                      Photo by {photo.user.username}
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </main>
  )
}
