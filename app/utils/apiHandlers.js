

export async function getPhotos(page = 1) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}?page=${page}`,{cache: 'no-store'});

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}