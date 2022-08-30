import {NextResponse} from "next/server";

export function middleware(req) {
    const token = req.cookies.get('token');
    const reqUrl = req.nextUrl.pathname;

    if (!token) {
        if (!reqUrl.match('/signin')) {
            return NextResponse.redirect(new URL('/signin', req.url));
        }
    }else {
        if(reqUrl.match("/signin")){
            return NextResponse.redirect(new URL('/', req.url));
        }else {
            return NextResponse.next();
        }
    }
}

export const config = {
    matcher: ['/signin', '/', '/product/:id*'],
};