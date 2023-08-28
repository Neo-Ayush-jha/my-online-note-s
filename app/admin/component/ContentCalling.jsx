"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
const ContentCalling=({content})=>{
    let router = useRouter()
    const handelDelete=async(id)=>{
        let data= await fetch(`/api/content/single/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
            }
        })
        router.push("/admin/content")
    }
    return (
        <div className="relative overflow-x-auto rounded">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Content name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Views
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Author
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Topic name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        content.data.map((value, key) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={key}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {value.content_title.substr(0, 10)}...
                                </th>
                                <td className="px-6 py-4 truncate">
                                    {value.content_text.substr(0, 45)}...
                                </td>
                                <td className="px-6 py-4 truncate">
                                    {value.view}
                                </td>
                                <td className="px-6 py-4 truncate">
                                    {value.author.name}
                                </td>
                                <td className="px-6 py-4 truncate">
                                    {value.topic_id.topic_title}
                                </td>
                                <td className="px-6 py-4">
                                    {(value.status) ? <span className='px-3 py-2 rounded bg-green-200 text-black'>Live</span> : <span className='px-3 py-2 rounded bg-red-400 text-white'>Draft</span>}
                                </td>
                                <td className="px-6 py-4 flex gap-1">
                                    <button onClick={()=>handelDelete(value._id)} className='px-3 py-2 rounded bg-red-400 text-white' >Delete</button>
                                    <Link className='px-3 py-2 rounded bg-green-400 text-white' href="">Edit</Link>
                                    <Link className='px-3 py-2 rounded bg-yellow-400 text-white' href={`/view/${value._id}`}>View</Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default ContentCalling