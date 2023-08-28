import Link from 'next/link'
import React from 'react'

function AsminSide() {
  return (
    <div className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 flex flex-col h-full'>
    <Link href="/admin" className='text-white px-3 py-2'>Dashboard</Link>
    <Link href="/admin/topic" className='text-white hover:bg-slate-800 px-3 py-2'>Manage Topic</Link>
    <Link href="/admin/content" className='text-white hover:bg-slate-800 px-3 py-2'>Manage Contents</Link>
    <Link href="/admin/content/insert" className='text-white hover:bg-slate-800 px-3 py-2'>Insert Contents</Link>
    <Link href="/admin/topic/insert" className='text-white hover:bg-slate-800 px-3 py-2'>Insert Topic</Link>
    <Link href="/admin/user" className='text-white hover:bg-slate-800 px-3 py-2'>User Manage</Link>
    <Link href="" className='text-white hover:bg-slate-800 px-3 py-2'>Login</Link>
    </div>
  )
}

export default AsminSide