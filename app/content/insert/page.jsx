import React from 'react'
import InsertFormPost from '@/app/(design)/components/InsertFormPost'

const insert=async()=>{
    const CallingTopic = await fetch(process.env.DOMAIN + "topic", { cache: "no-store" })
    const CallingUser = await fetch(process.env.DOMAIN + "user", { cache: "no-store" })
    let topic = await CallingTopic.json()
    let user = await CallingUser.json()
    return (
        <>
            <div className="flex justify-center">
                <div className="w-6/12">
                    <InsertFormPost allTopic={topic} allAuthor={user} />
                </div>
            </div>
        </>
    )
}

export default insert