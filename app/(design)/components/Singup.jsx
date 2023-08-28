"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Singup() {
    const [name, setName] = useState()
    const [email, setemail] = useState()
    const [contact, setcontact] = useState()
    const [password, setpassword] = useState()
    const route = useRouter()
    const handelSubmit = async (e) => {
        e.preventDefault();
        let data = await fetch("/api/user/singup", {
            method: "POST",
            body: JSON.stringify({ name, email, contact, password }),
            header: {
                "Content-Type": "application/json"
            }
        })
        data = await data.json()
        alert((data.message) || (data.error));
        route.push("/")
        console.log("hello")
    }
    return (
        <>
            <div className="bg-white border p-3">
                <h1 className='text-4xl text-center '>Create account Here</h1>
                <form method="post" onSubmit={handelSubmit}>
                    <div className="mb-3 flex-col flex">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={name} className='border px-3 py-2' onChange={(e) => setName(e.target.value)} name="name" placeholder='Enter your name...' />
                    </div>
                    <div className="mb-3 flex-col flex">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} className='border px-3 py-2' name="email" onChange={(e) => setemail(e.target.value)} placeholder='Enter your email...' />
                    </div>
                    <div className="mb-3 flex-col flex">
                        <label htmlFor="contact">Contact</label>
                        <input type="number" value={contact} className='border px-3 py-2' name="contact" onChange={(e) => setcontact(e.target.value)} placeholder='Enter your contact...' />
                    </div>
                    <div className="mb-3 flex-col flex">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} className='border px-3 py-2' name="password" onChange={(e) => setpassword(e.target.value)} placeholder='Enter your password...' />
                    </div>
                    <div className="mb-3 flex-row">
                        <input type="submit" value="Create new account..." className='border w-50 bg-teal-900 px-3 py-2 text-white' />
                        <Link className='border w-50  px-3 py-2 text-blue-500' href="/login">Login here...</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Singup