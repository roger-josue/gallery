'use client'
import { motion } from "framer-motion"
import Image from "next/image";
import DownloadButton from "./DownloadButton";
import { useState } from "react";
import ModalMenu from "./modalMenu";

export default function ImageWrapper({ photo }) {

    const [toggleModal, setToggleModal] = useState(false);

    return (
        <>
            <motion.div onClick={() => {setToggleModal(true)}} transition={{ duration: 1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="relative bg-gray-300 w-fit h-fit mb-4 mx-auto cursor-zoom-in">
                <Image width={400} height={600} src={`${photo.urls.regular}&fm=jpg&fit=max`} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsnPi1HgAGCgKA0hWgaQAAAABJRU5ErkJggg==" alt={photo.user.username} className="opacity-90 object-cover md:aspect-square" />
                <a
                    className="absolute text-lg bottom-0 left-2 transition-all duration-500 focus:text-primary hover:text-primary"
                    target="_blank"
                    href={`https://unsplash.com/@${photo.user.username}`}
                >
                    Photo by {photo.user.username}
                </a>
                <DownloadButton location={photo.links.download_location} filename={`By ${photo.user.name}.jpeg`} />
            </motion.div>
            {
                (toggleModal) &&
                <ModalMenu toggleModal={toggleModal} setToggleModal={setToggleModal} photo={photo} />
            }
        </>
    );
}