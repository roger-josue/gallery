'use client'
import { getPhotos } from "@/app/utils/apiHandlers";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useRef, useState } from "react";

export default function ImageGrid() {

    const [nextPage, setNextPage] = useState(2);
    const [photos, setPhotos] = useState([]);
    const threshold = useRef(null)
    const isIntersecting = useIntersectionObserver(threshold);

    useEffect(() => {
        if (isIntersecting) {
            getPhotos(nextPage).then(data => {
                setPhotos([...photos, ...data.response.results]);
                // console.log(data.response.results);
                setNextPage(nextPage + 1);
                // console.log(nextPage)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [isIntersecting]);

    useEffect(() => {
        /*
        Fetching from the Route handler because I cannot create dynamic requests from the browser 
        without hiding the Unsplash API calls behind the server
        */
        getPhotos().then(data => {
            setPhotos(data.response.results);
        }).catch(err => {
            console.log(err)
        })
    },[]);


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
            <div ref={threshold}></div>
        </div>
    );
}