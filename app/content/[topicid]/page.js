import Side from "@/app/(design)/components/Side";
import TopicCard from "@/app/(design)/components/TopicCard";
import Link from "next/link";


const Home = async ({ params }) => {
    const callinTopic = await fetch(`http://127.0.0.1:3000/api/topic/${params.topicid}`)
    const callinContent = await fetch(`http://127.0.0.1:3000/api/content/${params.topicid}`, { cache: "no-store" })
    let topic = await callinTopic.json()
    let content = await callinContent.json()
    console.log(topic);
    return (
        <>
            <div className="flex ">
                
                <div className="w-10/12 p-6">
                    <div className="p-6">
                        <TopicCard value={topic.data} className="m-6" />
                        <div className="flix flix-col gap-3">
                            <h2 className="mb-2 text-lg font-semibold text-gray-900 text-black">{topic.data.topic_title}:</h2>
                            <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                                {
                                    content.data.map((value, key) => (<Link href={`/view/${value._id}`}><li className="text-blue-600" key={key}>{value.content_title}</li></Link>))
                                }
                            </ol>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home