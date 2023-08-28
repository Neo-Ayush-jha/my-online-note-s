import User from "@/app/model/User"
import Connect from "@/app/utils/Connect"
import bcrypt from "bcryptjs"
import { serialize } from "cookie"
import JWT from "jsonwebtoken"
import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server"

Connect()
export async function POST(req) {
    let code = 200
    const { email, password } = await req.json()
    const user = await User.findOne({ email: email })
    if (user) {
        const isPassword = await bcrypt.compare(password, user.password)
        if (isPassword) {
            const tokenData = {
                id: user._id,
                name: user.name,
                email: user.email
            }
            // 1h = 1 hour ke liye
            const token = await JWT.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: "1h" })
            const respone = NextResponse.json(
                {
                    user, message: "Login Succefully.."
                },
                {
                    status: code
                }
            )
            respone.cookies.set("token", token, { httpOnly: true})
            return respone
        } else {
            code = 401
            return NextResponse.json({
                message: "This email and password is not match..."
            },
                {
                    status: code
                })
        }
    } else {
        code = 404
        return NextResponse.json(
            {
                message: "Email is not found in database..."
            },
            {
                status: code
            }
        )
    }
}