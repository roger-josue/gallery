import { NextResponse } from 'next/server';
import { search } from '@/unsplash/unsplashAPI';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('search');
    const page = searchParams.get('page');
    const searchData = await search(query,page);

    return NextResponse.json(searchData);
}