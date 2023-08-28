import Link from 'next/link'
import AdminInsertContent from '../../component/AdminInsertContent'

const page = async () => {
    const CallingTopic = await fetch(process.env.DOMAIN + "topic", { cache: "no-store" })
    const CallingUser = await fetch(process.env.DOMAIN + "user", { cache: "no-store" })
    let topic = await CallingTopic.json()
    let user = await CallingUser.json()
    return (
        <>
            <div className='flex flex-col p-10'>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-black">Insert Content</h2>
                    <Link href="/admin/content" className='bg-teal-600 text-white px-3 py-2 rounded'>Show All Content</Link>
                </div>
                <div className="flex flex-col mt-5">
                    <AdminInsertContent allTopic={topic} allAuthor={user} />
                </div>
            </div>
        </>
    )
}

export default page