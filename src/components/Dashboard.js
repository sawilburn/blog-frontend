import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import PostContext from '../context/post/postContext';

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const { loadUser, user } = authContext;

  const postContext = useContext(PostContext);
  const { getPosts, posts } = postContext;

  useEffect(() => {
    loadUser();
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Welcome {user && user.name}</h1>
      <Link to="/new-post" className="btn btn-primary">Create New Post</Link>
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

export default Dashboard;


