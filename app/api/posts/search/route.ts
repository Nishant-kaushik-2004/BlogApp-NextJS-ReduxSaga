import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q') || '';

    if (!q) {
      return NextResponse.json(
        { message: 'Search query is required' },
        { status: 400 }
      );
    }

    // Forward to DummyJSON API
    const response = await fetch(`https://dummyjson.com/posts/search?q=${encodeURIComponent(q)}`);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Search failed' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}