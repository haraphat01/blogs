import { useSelector } from "react-redux";
import React from 'react'

export default function PostList() {
    const posts = useSelector((state)=> state.posts)
    const renderedPosts = posts.map((post)=> {
        return(
        <article key={post.id}>
            <h3 >{post.title}</h3>
            <h3 >{post.content.substring(0,100)}</h3>
        </article>)
    })
  return (
    <div>
      <h2>Posts</h2>
      {renderedPosts}
    </div>
  )
}
