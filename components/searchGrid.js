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
            <Grid photos={photos} />
            {/* <div ref={threshold}></div> */}
        </div>
    );
}