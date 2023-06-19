import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default async function middleware(request: NextRequest) {
   let token = request.cookies.get('jwt')
   if (!token) {
      if (!(request.nextUrl.pathname.startsWith('/auth'))) {
         return NextResponse.rewrite(new URL('/auth/login', request.url))
      }
   }
   else {
      if (request.nextUrl.pathname.startsWith('/auth')) {
         return NextResponse.rewrite(new URL('/', request.url))
      }
   }
}

export const config = {
   matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico|css|assets).*)',
   ],
}
