import React, { useState, useContext, useEffect } from 'react';
import PostContext from '../context/post/postContext';

const PostForm = ({ history }) => {
  const postContext = useContext(PostContext);
  const { addPost, current, clearCurrent, updatePost } = postContext;

  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  useEffect(() => {
    if (current !== null) {
      setPost(current);
    } else {
      setPost({
        title: '',
        body: '',
      });
    }
  }, [postContext, current]);

  const { title, body } = post;

  const onChange = (e) =>
    setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addPost(post);
    } else {
      updatePost(post);
    }
    clearAll();
    history.push('/dashboard');
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Edit Post' : 'Add Post'}
      </h2>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={onChange}
      />
      <textarea
        placeholder="Body"
        name="body"
        value={body}
        onChange={onChange}
      ></textarea>
      <div>
        <input
          type="submit"
          value={current ? 'Update Post' : 'Add Post'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default PostForm;


