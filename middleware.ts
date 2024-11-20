import { NextRequest, NextResponse } from "next/server";
import authenticate from "./app/admin/auth/AuthenticationService";
import { use } from "react";
import User from "./model/UserModel";







export default async function Middleware(req:NextRequest, res:NextResponse){
    const userCookie = req.cookies.get('user')?.value as string;
    const user = await JSON.parse(userCookie) as User;
    if (authenticate(user.userName, user.password)){
        return NextResponse.next();
    } else {
        return NextResponse.redirect(new URL('/home', req.url))
    }
}

export const config = {
    matcher: ['/admin/:path*', '/admin', '/admin/home']
};
