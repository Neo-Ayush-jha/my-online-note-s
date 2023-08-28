import Link from 'next/link'
import React from 'react'
import ContentCalling from '../component/ContentCalling'

const page = async () => {
    const CallingTopic = await fetch(process.env.DOMAIN + "content", { cache: "no-store" })
    let content = await CallingTopic.json()
    return (
        <>
        <div className='flex flex-col p-10'>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-black">Manage Content</h2>
                <Link href="/admin/content/insert" className='bg-teal-600 text-white px-3 py-2 rounded'>Insert Content</Link>
            </div>
            <div className="flex flex-col mt-5">
            <ContentCalling content={content}/>
            </div>
        </div>
    </>
        
    )
}

export default page