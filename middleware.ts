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
      await validateUser();
   }
}

async function validateUser() {
   const response = await fetch('http://localhost:8000/api/auth/me', {
      method: 'POST',
      credentials: 'include'
   })
   if (response.ok) {
      const data = await response.json()
      console.log('User:', data) // Handle the user data as needed
   } else {
      console.log('Error:', response.statusText) // Handle the error as needed
   }
}

export const config = {
   matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico|css|assets).*)',
   ],
}