'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function TopicInsertForm({ allAuthor, allTopic }) {
    const router = useRouter()
    const [topic_id, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [content_title, setContent_title] = useState("")
    const [content_text, setContent_text] = useState("")
    const handelSubmit = async (e) => {
        e.preventDefault()
        let data = await fetch("/api/content", {
            method: "POST",
            body: JSON.stringify({ topic_id,author,content_title,content_text,view:0}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        data = await data.json()
        router.push("/admin/content")
    }
    return (
        <div className=" max:w-sm p-4 bg-gray-600 w-6/12  border border-gray-200 rounded-lg shadow sm:p-6 justify-center">
            <form className='space-y-6' onSubmit={handelSubmit}>
                <div className="mb-6 flex flex-1 gap-3 items-center">
                    <label htmlFor="email" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Topic Title</label>
                    <select className="border px-2 py-3 rounded bg-slate-500 text-white hover:bg-white hover:text-black border-none" onChange={(e) => setTitle(e.target.value)}>
                    <option >Select Topic</option>
                        {
                            allTopic.data.map((value, key) => (
                                <option key={key} value={value._id}>{value.topic_title}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-6 flex flex-1 gap-3 items-center">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Topic Title</label>
                    <select className="border px-2 py-3 rounded  bg-slate-500 text-white hover:bg-white hover:text-black border-none" onChange={(e) => setAuthor(e.target.value)}>
                    <option >Select User</option>
                        {
                            allAuthor.data.map((value, key) => (
                                <option key={key} value={value._id}>{value.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content Title</label>
                    <input type="text" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="type topic title" value={content_title} required onChange={e => setContent_title(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Topic Discription</label>
                    <textarea rows="5" type="text" placeholder='type topic discription' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={content_text} required onChange={e => setContent_text(e.target.value)} ></textarea>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Topic</button>
            </form>
        </div>
    )
}

export default TopicInsertForm