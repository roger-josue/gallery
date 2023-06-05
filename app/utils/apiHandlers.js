

export async function getPhotos(page = 1) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}?page=${page}`,{cache: 'no-store'});

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export async function searchPhotos(query,page = 1) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/search?search=${query}&page=${page}`,{cache: 'no-store'});

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export async function downloadPhoto(location) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/download`,{cache: 'no-store', method: 'POST' ,body: JSON.stringify({location}), headers: {"Content-Type": "application/json"}});

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


export async function downloadFile(url) {
    try {
      // Fetch the file
      const response = await fetch(url);
  
      // Check if the request was successful
      if (response.status !== 200) {
        throw new Error(
          `Unable to download file. HTTP status: ${response.status}`
        );
      }
    //   const blob = await response.blob();
      
      return response.blob();
    } catch (error) {
      console.error("Error downloading the file:", error.message);
    }
  }