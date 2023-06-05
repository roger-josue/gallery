'use client'

import { downloadFile, downloadPhoto } from "@/app/utils/apiHandlers";
import { useEffect, useRef, useState } from "react";

export default function DownloadButton({ location, filename = 'image.jpeg' }) {

    const tempLink = useRef(null);
    const [toggleLink, setToggleLink] = useState(false);
    const [toggleButton, setToggleButton] = useState(true);

    useEffect(() => {
        if (toggleLink === true) {
            downloadPhoto(location)
                .then(data => data)
                .then(data => downloadFile(data.response.url))
                .then(blob => {
                    tempLink.current.href = URL.createObjectURL(blob);
                    tempLink.current.click();
                    URL.revokeObjectURL(tempLink.current.href);
                    setToggleLink(false);
                    setToggleButton(true);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [toggleLink])

    function handleClick() {
        setToggleButton(false);
        setToggleLink(true)
    }


    return (
        <button onClick={handleClick} disabled={!toggleButton} className="absolute text-lg bottom-1 right-2 transition-all duration-500 shadow-md text-darkText p-2 rounded-md hover:bg-primary disabled:bg-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            {
                (toggleLink) &&
                <a ref={tempLink} href="/" download={filename}></a>
            }
        </button>
    );
}