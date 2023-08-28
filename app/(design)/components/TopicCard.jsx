import React from 'react'

const TopicCard = async ({value}) => {
    
    return (
        <div className='flex flex-col mb-12'>
            <h2 className='text-xl font-bold'>{value.topic_title}</h2>
            <p className="tet-lg">{value.description}</p>
        </div>
    )
}

export default TopicCard