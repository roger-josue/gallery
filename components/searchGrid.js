'use client'

import { searchPhotos } from "@/app/utils/apiHandlers";
// import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SearchGrid() {

    const searchParams = useSearchParams();
    const [photos, setPhotos] = useState([]);
    // const [nextPage, setNextPage] = useState(1);
    // const threshold = useRef(null)
    // const isIntersecting = useIntersectionObserver(threshold);

    // TODO: Implement infinite scroll pagination for the search results
    useEffect(() => {
        const search = searchParams.get('search');
        // if (isIntersecting) {
            searchPhotos(search).then(value => {
                setPhotos([...value.response.results]);
                // setNextPage(nextPage + 1);
            }).catch(e => {
                console.log(e);
            })
        // }
    }, [searchParams])


    return (
        <div className='max-w-screen-2xl min-h-[600px] py-10 mx-auto sm:px-4 columns-auto md:grid md:gap-2 md:grid-cols-2 lg:grid-cols-3'>
            {
                photos.map(photo => {
                    return (
                        <div key={photo.id} className="relative bg-gray-300 w-fit h-fit mb-4 mx-auto">
                            <Image width={600} height={800} src={`${photo.urls.regular}&fm=jpg&fit=max`} alt={photo.user.username} className="opacity-90 object-cover md:aspect-square" />
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
            {/* <div ref={threshold}></div> */}
        </div>
    );
}