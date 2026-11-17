import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOCAL_ORIGIN = /^http:\/\/(localhost|127\.0\.0\.1):\d+$/;

function applyCors(response: NextResponse, origin: string | null) {
  if (origin && LOCAL_ORIGIN.test(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Vary', 'Origin');
  }

  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Accept',
  );

  return response;
}

export function proxy(request: NextRequest) {
  const origin = request.headers.get('origin');

  if (request.method === 'OPTIONS') {
    return applyCors(new NextResponse(null, { status: 204 }), origin);
  }

  return applyCors(NextResponse.next(), origin);
}

export const config = {
  matcher: '/api/:path*',
};
