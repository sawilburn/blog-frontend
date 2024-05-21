import React, { useContext, useEffect } from 'react';
import PostContext from '../context/post/postContext';

const Posts = () => {
  const postContext = useContext(PostContext);
  const { posts, getPosts } = postContext;

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      <div className="posts">
        {posts && posts.map((post) => (
          <div key={post._id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;


