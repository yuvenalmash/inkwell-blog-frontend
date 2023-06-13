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
    <div className="flex flex-col align-center">
      <h1 className="text-3xl text-center font-bold">Recent Posts</h1>
      {status === 'loading' ? (
        <h1 className="text-2xl font-bold">Loading...</h1>
      ) : (
        <div className="flex flex-col items-center w-fit gap-5">
          {posts.length === 0 ? (
            <h1 className="text-2xl font-bold">No posts yet</h1>
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
