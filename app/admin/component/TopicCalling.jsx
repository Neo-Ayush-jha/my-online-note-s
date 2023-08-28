'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const TopicCalling = ({ topic }) => {
    let router = useRouter()
    const handelDelete = async (id) => {
        let data = await fetch(`/api/topic/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        })
        
        router.push("/admin/topic")
    }

    return (
        <div className="relative overflow-x-auto rounded">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Topic name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        topic.data.map((value, key) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={key}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {value.topic_title}
                                </th>
                                <td className="px-6 py-4 truncate-50">
                                    {value.description.substr(0,150)}...
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4 flex gap-1">
                                    <button className='px-3 py-2 rounded bg-red-400 text-white' onClick={() => handelDelete(value._id)} href="">Delete</button>
                                    <button className='px-3 py-2 rounded bg-green-400 text-white' href="">Edit</button>
                                    <button className='px-3 py-2 rounded bg-yellow-400 text-white' href="">View</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>)
}

export default TopicCalling