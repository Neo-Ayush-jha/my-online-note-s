import Link from 'next/link'
import React from 'react'
import TopicCalling from '../component/TopicCalling'

const page = async () => {
    const CallingTopic = await fetch(process.env.DOMAIN + "topic", { cache: "no-store" })
    let topic = await CallingTopic.json()
    return (
        <>
            <div className='flex flex-col p-10'>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-black">Manage Topic</h2>
                    <Link href="/admin/topic/insert" className='bg-teal-600 text-white px-3 py-2 rounded'>Insert topic</Link>
                </div>
                <div className="flex flex-col mt-5">
                    <TopicCalling topic={topic} />
                </div>
            </div>
        </>

    )
}

export default page