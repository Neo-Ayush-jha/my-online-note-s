import Link from 'next/link'
import React from 'react'

const viewpage = async({params}) => {
    let callingOneContent = await fetch(`http://127.0.0.1:3000/api/content/single/${params.contentid}`,{cache:"no-store"})
    callingOneContent = await callingOneContent.json()

  return (
    <div className='flex flex-1 flex-col gap-3'>
        <h1 className='text-4xl font-black'>{callingOneContent.data.content_title}</h1> 
        <div className="flex gap-5 text-xs">
            <h6 className='text-slate-600'>Author: {callingOneContent.data.author.name}</h6>
            <h6 className='text-slate-600'>Topic: {callingOneContent.data.topic_id.topic_title}</h6>
        </div>
        <div className="text-lg">
            <p  className='leading-8 text-justify'>{callingOneContent.data.content_text}</p>
        </div>

        <div className="flex justify-between flex-1">
            <Link href='' className='text-white bg-slate-900 px-3 py-2 rounded'>Prev Topic</Link>
            <Link href='' className='text-white bg-green-900 px-3 py-2 rounded'>Next Topic</Link>
        </div>
    </div>
  )
}

export default viewpage