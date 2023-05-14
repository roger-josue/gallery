
export default function Footer(){
    return(
        <div className="w-full h-16 flex flex-wrap place-content-center">
            <h1 className="text-lg sm:text-xl text-gray-500">Created by <b>Roger Vargas - {new Date().getFullYear()}</b></h1>
        </div>
    );
}