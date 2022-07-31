import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middlware(req: NextRequest) {
    const token = await getToken({
        req,
        secret: process.env.JWT_SECRET
    })
    const { pathname } = req.nextUrl

    if (pathname.includes('/api/auth')  || token ) {
        return NextResponse.next()
    } else if (!token && pathname !== "/Login") {
        return NextResponse.redirect('/Login')
    }
}