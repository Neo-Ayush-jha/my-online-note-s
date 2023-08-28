"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function LoginPage() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const route= useRouter()
    const handelSubmit=async(e)=>{
        e.preventDefault();
        let data=await fetch("/api/user/login",{
            method:"POST",
            body:JSON.stringify({email,password}),
            header:{
                "Content-Type":"application/json"
            }
        })
        data = await data.json()
        route.push("/")
        alert((data.message) || (data.error));
    }
    return (
        <>
            <div className="bg-white border p-3">
                <h1 className='text-4xl text-center '>Login account Here</h1>
                <form method="post" onSubmit={handelSubmit}>
                   
                    <div className="mb-3 flex-col flex">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} className='border px-3 py-2' name="email" onChange={(e)=>setemail(e.target.value)} placeholder='Enter your email...' />
                    </div>
                    
                    <div className="mb-3 flex-col flex">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} className='border px-3 py-2' name="password" onChange={(e)=>setpassword(e.target.value)} placeholder='Enter your password...' />
                    </div>
                    <div className="mb-3 flex-row flex justify-between">
                        <input type="submit" value="Login..." size="50" className='border w-50 bg-teal-900 px-3 py-2 text-white' />
                        <Link className='border w-50  px-3 py-2 text-blue-500' size="50" href="/singup">Create new account here...</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginPage