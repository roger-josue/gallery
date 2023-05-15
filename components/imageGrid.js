'use client'
import Image from "next/image";

export default function ImageGrid({photos}) {
    return (
        <div className='max-w-screen-2xl min-h-[600px] py-10 mx-auto sm:px-4 columns-auto md:columns-2 lg:columns-3'>
                {
                    photos.map(photo => {
                        return (
                            <div key={photo.id} className="relative bg-gray-300 w-fit h-fit mb-4 mx-auto">
                                <Image width={600} height={800} src={`${photo.urls.regular}&fm=jpg&fit=max`} alt={photo.user.username} className="opacity-90 object-cover" />
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
    );
}