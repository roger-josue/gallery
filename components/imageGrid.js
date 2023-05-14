'use client'
import Image from "next/image";

export default function ImageGrid({photos}) {
    return (
        <div className='max-w-screen-2xl min-h-[600px] py-10 mx-auto sm:px-4 grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6'>
            <div className="flex flex-wrap place-content-start gap-4">
                {
                    photos.map(photo => {
                        return (
                            <div className="relative bg-gray-300 h-max">
                                <Image width={600} height={800} src={`${photo.urls.regular}&fm=jpg&w=600&fit=max`} alt={photo.user.username} className="opacity-90 " />
                                <a
                                    className="absolute text-lg bottom-0 left-2 transition-all duration-500 focus:text-primary hover:text-primary"
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
                    photos.map(photo => {
                        return (
                            <div className="relative bg-gray-300 h-max">
                                <Image width={600} height={800} src={`${photo.urls.regular}&fm=jpg&w=600&fit=max`} alt={photo.user.username} className="opacity-90 " />
                                <a
                                    className="absolute text-lg bottom-0 left-2 transition-all duration-500 focus:text-primary hover:text-primary"
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
            <div className="lg:flex lg:flex-wrap place-content-start lg:col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {
                    photos.map(photo => {
                        return (
                            <div className="relative bg-gray-300 h-max">
                                <Image width={600} height={800} src={`${photo.urls.regular}&fm=jpg&w=600&fit=max`} alt={photo.user.username} className="opacity-90 " />
                                <a
                                    className="absolute text-lg bottom-0 left-2 transition-all duration-500 focus:text-primary hover:text-primary"
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
    );
}