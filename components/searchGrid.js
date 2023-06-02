'use client'

import { searchPhotos } from "@/app/utils/apiHandlers";
// import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Grid from "./Grid";

export default function SearchGrid() {

    const searchParams = useSearchParams();
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
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
            if (loading) {
                setLoading(false);
            }
        }).catch(e => {
            console.log(e);
        })
        // }
    }, [searchParams])


    return (
        <div className='max-w-screen-2xl min-h-[600px] py-10 mx-auto sm:px-4 columns-auto md:grid md:gap-2 md:grid-cols-2 lg:grid-cols-3'>
            {
                (loading) ? (
                    <>
                        <div className="bg-gray-300 w-full h-[400px] mb-4 mx-auto block animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                        <div className="bg-gray-300 w-full h-[400px] mb-4 mx-auto block animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                        <div className="bg-gray-300 w-full h-[400px] mb-4 mx-auto block animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                    </>

                ) : (
                    <Grid photos={photos} />
                )
            }
            {/* <div ref={threshold}></div> */}
        </div>
    );
}