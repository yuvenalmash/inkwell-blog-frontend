import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectAllPosts, selectPostsStatus } from '../../redux/slices/postsSlice';
import Post from './Post';

const RecentPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const status = useSelector(selectPostsStatus);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-bold text-gray-900">Recent Posts</h1>
      {status === 'loading' ? (
        <h1 className="text-2xl font-bold text-gray-900">Loading...</h1>
      ) : (
        <div className="flex flex-col gap-5">
          {posts.length === 0 ? (
            <h1 className="text-2xl font-bold text-gray-900">No posts yet</h1>
          ) : (
            posts.map((post) => (
              <Post key={post.id} post={post} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default RecentPosts;
