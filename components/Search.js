'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        if(sessionStorage.getItem('search')){
            setSearchInput(sessionStorage.getItem('search'));
        }
    }, [])
    

    function navigate() {
        if (searchInput.trim().length > 0) {
            const params = new URLSearchParams(searchParams);
            params.set('search', searchInput);
            router.push(`/search?${params.toString()}`);
        } else {
            router.push('/');
        }
    }
    
    function handleInput(input) {
        sessionStorage.setItem('search',input.target.value);
        setSearchInput(input.target.value);
    }

    function handleKeyStroke(key) {
        if (key.code === 'Enter') {
            navigate();
        }
    }

    return (
        <div className="absolute inset-0 bg-bgDark bg-opacity-50 z-10 flex flex-col place-content-center place-items-center gap-4 p-4 md:p-0">
            <h1 className="text-left w-full md:w-[700px]">All the high-resolution images that you want to see</h1>
            <p className="text-left w-full md:w-[700px]">Find and share with your friends the best high-quality photos</p>
            <div className="flex w-full justify-center group/search">
                <input className="p-4 text-xl rounded-l-md w-full md:w-[700px] outline-none opacity-80 transition-all duration-500 group-hover/search:ring-2 ring-primary focus:opacity-100 group-hover/search:opacity-100" type="text" name="search" id="search" placeholder="Search high-resolution pics" value={searchInput} onChange={(e) => handleInput(e)} onKeyDown={(e) => handleKeyStroke(e)} />
                <button type="button" onClick={() => navigate()} className="group/btn bg-primary text-darkText rounded-r-md outline-none px-4 text-xl opacity-80 transition-all duration-500 focus:opacity-100 group-hover/search:opacity-100 group-hover/search:ring-2 ring-primary z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="transition-all duration-500 w-10 h-10 group-hover/btn:scale-125 group-focus/btn:scale-125 pointer-events-none">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}