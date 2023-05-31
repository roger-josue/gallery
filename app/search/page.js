'use client'

import { useEffect } from "react"
import { searchPhotos } from "../utils/apiHandlers"

export default async function Search({searchParams}) {

    useEffect(() => {
        console.log(searchParams.search)
        searchPhotos(searchParams.search).then( value => {
            console.log(value);
        }).catch( e => {
            console.log(e);
        })
    }, [searchParams])
    
    return (
      <main className='w-screen min-h-screen'>
          {/* display search results */}
      </main>
    )
  }