import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-gray-900 w-screen h-screen'>
      <div className='max-w-screen-xl h-screen mx-auto'>
        <div className='w-full h-full flex place-content-center place-items-center'>
          <h1 className='text-slate-100 text-center text-4xl font-bold shadow-lg shadow-gray-950 ring-2 ring-gray-700 rounded-md p-4'>Hello there</h1>
        </div>
      </div>
    </main>
  )
}
