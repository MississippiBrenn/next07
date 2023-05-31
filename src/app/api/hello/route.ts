import { NextResponse } from 'next/server';

//statically evaluated, no variation in request or info we depend on from incoming request
//back end api endpoint
export async function GET() {
  return NextResponse.json({ message: 'Hello, Next.js!' });
}
