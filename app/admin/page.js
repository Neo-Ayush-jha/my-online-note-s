import Link from 'next/link'
import React from 'react'

const page = async () => {
  let countTopic = await fetch("http://127.0.0.1:3000/api/topic", { cache: "no-store" });
  let countContent = await fetch("http://127.0.0.1:3000/api/content", { cache: "no-store" });
  let countUser = await fetch("http://127.0.0.1:3000/api/user", { cache: "no-store" });
  countTopic = await countTopic.json()
  countContent = await countContent.json()
  countUser = await countUser.json()
  countTopic = countTopic.data.length
  countContent = countContent.data.length
  countUser = countUser.data.length
  return (
    <>
      <div className="grid mb-8 rounded-lg shadow-sm md:mb-12 md:grid-cols-4 gap-3">
        <Link href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{countTopic}</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">Topic's.</p>
        </Link>
        <Link href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{countContent}</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">Content's.</p>
        </Link>
        <Link href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{countUser}</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">User's.</p>
        </Link>
      </div>
    </>
  )
}

export default page