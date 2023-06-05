import { NextResponse } from 'next/server';
import { download } from '@/unsplash/unsplashAPI';

export async function POST(request) {
    // const data = request.body
    const {location} = await request.json();
    const data = await download(location);

    return NextResponse.json(data);
}