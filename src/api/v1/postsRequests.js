import API_URL from '../../config';

const getPosts = async () => {
  const res = await fetch(`${API_URL}/posts`);
  const data = await res.json();
  return data;
};

const getUserPosts = async (userId) => {
  const res = await fetch(`${API_URL}/users/${userId}/posts`);
  const data = await res.json();
  return data;
};

const createPost = async (post) => {
  const {
    userId, title, content, slug,
  } = post;
  const res = await fetch(`${API_URL}/users/${userId}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content, slug }),
  });
  const data = await res.json();
  return data;
};

const deletePost = async (postId) => {
  const res = await fetch(`${API_URL}/posts/${postId}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  return data;
};

export {
  getPosts, createPost, deletePost, getUserPosts,
};
