import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Forward to DummyJSON API
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Post not found' },
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