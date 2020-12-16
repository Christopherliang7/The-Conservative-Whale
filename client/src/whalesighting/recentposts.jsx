import React from 'react';

function RecentPosts(props) {
  return (
    <>
      <h2> Recent Posts </h2>
      {console.log(props)}
      {props.posts.map((post) => {
        return (
          <>
            <div>{post.title}</div>
            <div>{post.description}</div>
            <br></br>
          </>
        )
      })}
    </>
  )
}

export default RecentPosts;