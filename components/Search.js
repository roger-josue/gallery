'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchInput, setSearchInput] = useState('');

    function handleInput(input) {
        setSearchInput(input.target.value);
    }
    
    useEffect(() => {
        if (searchInput.trim().length > 0) {
            const params = new URLSearchParams(searchParams);
            params.set('search', searchInput);
            router.push(`/search?${params.toString()}`);
        } else {
            router.push('/');

        }
    }, [searchInput])

    return (
        <div className="absolute inset-0 bg-bgDark bg-opacity-50 z-10 flex flex-col place-content-center place-items-center gap-4 p-4 md:p-0">
            <h1 className="text-left w-full md:w-[700px]">All the high-resolution images that you want to see</h1>
            <p className="text-left w-full md:w-[700px]">Find and share with your friends the best high-quality photos</p>
            <input className="p-4 text-xl rounded-md w-full md:w-[700px] outline-none opacity-80 transition-all duration-500 focus:ring-2 ring-primary focus:opacity-100" type="text" name="search" id="search" placeholder="Search high-resolution pics" value={searchInput} onChange={(e) => handleInput(e)} />
        </div>
    );
}