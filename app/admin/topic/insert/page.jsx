import Link from 'next/link'
import TopicInsertForm from '../../component/TopicInsertForm'

const page = async () => {

    return (
        <>
            <div className='flex flex-col p-10'>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-black">Insert Topic</h2>
                    <Link href="/admin/topic" className='bg-teal-600 text-white px-3 py-2 rounded'>Show All Topic</Link>
                </div>
                <div className="flex flex-col mt-5">
                    <TopicInsertForm />
                </div>
            </div>
        </>

    )
}

export default page