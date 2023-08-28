import Image from 'next/image'
import Side from './(design)/components/Side'
import TopicCard from './(design)/components/TopicCard'

const Home = async () => {
  const callinTopic = await fetch("http://127.0.0.1:3000/api/topic", { cache: "no-store" })
  let topic = await callinTopic.json();

  return (
    <>
      <div className="p-6">
        {
          topic.data.map((value, key) => (
            <TopicCard key={key} value={value} className="m-6" />
          ))
        }
      </div>
    </>
  )
}

export default Home