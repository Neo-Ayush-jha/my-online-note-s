import Link from 'next/link'
import React from 'react'

const Side = async () => {
    const callinTopic = await fetch("http://127.0.0.1:3000/api/topic",{ cache: "no-store" })
    let topic = await callinTopic.json();

    return (
        <>
            <div className="flex flex-col">
                <Link className='bg-slate-200 text-black font-semibold font-sans text-xl px-4 py-2' href="">Topic's </Link>
                {
                    topic.data.map((value, key) => (
                        <Link className='bg-slate-200 hover:bg-slate-400 text-black  font-sans text-lg px-4 py-2' href={`/content/${value._id}`} key={key}>{value.topic_title}</Link>
                    ))
                }
            </div>
        </>
    )
}

export default Side