import React from 'react'
import appwriteSerivce from '../appwrite/config'

function PostCard({$id, title, featureImage}) {
  return (
    <link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteSerivce.getFilePreview(featureImage)} alt={title}
                className='rounded-xl' />
            </div>
            <h2 className='rounded-xl font-bold'>{title}</h2>
        </div>
    </link>
  )
}

export default PostCard
