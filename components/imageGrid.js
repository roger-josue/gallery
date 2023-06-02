'use client'
import { getPhotos } from "@/app/utils/apiHandlers";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useRef, useState } from "react";
import Grid from "./Grid";

export default function ImageGrid() {

    const [nextPage, setNextPage] = useState(1);
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


    return (
        <div className='max-w-screen-2xl min-h-[600px] py-10 mx-auto sm:px-4 columns-auto md:grid md:gap-2 md:grid-cols-2 lg:grid-cols-3'>
            <Grid photos={photos} />
            <div ref={threshold}></div>
        </div>
    );
}