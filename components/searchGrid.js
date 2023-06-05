'use client'

import { searchPhotos } from "@/app/utils/apiHandlers";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Grid from "./Grid";
import Link from "next/link";

export default function SearchGrid() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [previousParam, setPreviousParam] = useState(searchParams.get('search'));
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState(1);
    const threshold = useRef(null)
    const isIntersecting = useIntersectionObserver(threshold);


    useEffect(() => {
        const search = searchParams.get('search');
        if (previousParam !== search) {
            window.location.reload(true);
        }
        setPreviousParam(search);
        if (isIntersecting || photos.length === 0) {
            searchPhotos(search, nextPage).then(value => {

                setPhotos([...photos, ...value.response.results]);
                setNextPage(nextPage + 1);
                if (loading) {
                    setLoading(false);
                }
            }).catch(e => {
                console.log(e);
            })
        }

    }, [searchParams, isIntersecting])


    return (
        <div className='max-w-screen-2xl min-h-[600px] py-10 mx-auto sm:px-4 columns-auto md:grid md:gap-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            <ul className="md:col-span-2 lg:col-span-3 2xl:col-span-4 ml-4 mb-4 mx-auto w-fit flex gap-2 h-8 items-center">
                <li className="h-full">
                    <Link className="text-primary visited:text-accent hover:underline" href={'/'}>&gt; Home</Link>
                </li>
                <li className="h-full">
                    <button className="text-2xl text-primary visited:text-accent hover:underline" onClick={() => { router.back() }}>&gt; Previous</button>
                </li>
            </ul>
            {
                (loading) ? (
                    <>
                        <div className="bg-gray-300 w-[400px] h-[600px] mb-4 mx-auto block animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                        <div className="bg-gray-300 w-[400px] h-[600px] mb-4 mx-auto block animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                        <div className="bg-gray-300 w-[400px] h-[600px] mb-4 mx-auto block animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                        <div className="bg-gray-300 w-[400px] h-[600px] mb-4 mx-auto block animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                    </>

                ) : (
                    <Grid photos={photos} />
                )
            }
            <div ref={threshold}></div>
        </div>
    );
}