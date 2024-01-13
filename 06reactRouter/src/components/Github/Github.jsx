import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch("https://api.github.com/users/Sid-das-2023")
    //   .then(res => res.json())
    //   .then(data => {
    //       setData(data)
    //     })
    // }, [])
    
  return (
    <div className='bg-gray-600 text-3xl text-center p-4 font-semibold text-white'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Github Image" />
    </div>
  )
}

export default Github
export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Sid-das-2023")
    return response.json()
}