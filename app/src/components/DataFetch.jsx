import axios from 'axios'
import React, {useState , useEffect} from 'react'

const DataFetch = () => {
    const [Post, SetPost]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res =>{
            console.log(res)
            SetPost(res.data)
        })

        .catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <div>
      <ul>
         {
            Post.map(post=><li key={post.id}>{post.title}</li>)
         }
      </ul>
    </div>
  )
}

export default DataFetch
