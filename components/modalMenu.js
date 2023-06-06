'use client'
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DownloadButton from "./DownloadButton";

export default function ModalMenu({ toggleModal, setToggleModal, photo }) {

    const closeOnclick = ["dialog"];
    const modal = useRef(false);
    // const [viewportWith, setviewportWith] = useState(null);

    useEffect(() => {
        if (toggleModal) {
            modal.current.show();
        } else {
            modal.current.close();
        }
    }, [toggleModal, setToggleModal])

    const handleExit = ({ type, code, target }) => {
        if (type === "keydown" && code === "Escape" || type === "click" && closeOnclick.includes(target.localName))
            setToggleModal(false);
    }


    return (
        <motion.dialog initial={{opacity: 0}} transition={{duration: 0.5}} whileInView={{opacity: 1}} viewport={{once: true}} onKeyDown={(e) => handleExit(e)} onClick={(e) => handleExit(e)} ref={modal} className="fixed z-20 inset-0 w-screen h-screen bg-gray-800 bg-opacity-70 flex flex-col place-content-center items-center p-20">
            <motion.div transition={{ duration: 1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="relative w-[90vw] h-[90vh] sm:w-[60vw] sm:h-[80vh] lg:w-[50vw] lg:h-[70vh]">
                <Image priority fill src={`${photo.urls.regular}&fm=jpg&fit=max`} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsnPi1HgAGCgKA0hWgaQAAAABJRU5ErkJggg==" alt={photo.user.username} className="object-cover opacity-95" />
                <a
                    className="absolute text-lg bottom-0 left-2 transition-all duration-500 focus:text-primary hover:text-primary"
                    target="_blank"
                    href={`https://unsplash.com/@${photo.user.username}`}
                >
                    Photo by {photo.user.username}
                </a>
                <DownloadButton location={photo.links.download_location} filename={`By ${photo.user.name}.jpeg`} />
            </motion.div>
        </motion.dialog>
    );
}