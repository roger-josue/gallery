import { NextResponse } from 'next/server';
import { getList } from '@/unsplash/unsplashAPI';

export async function GET(request) {
    // console.log(request);
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    const photosData = await getList(page);
    //   const data = { greeting: 'Hello there'};

    return NextResponse.json(photosData);
}