import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') || '10';
    const skip = searchParams.get('skip') || '0';

    // Forward to DummyJSON API
    const response = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Failed to fetch posts' },
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