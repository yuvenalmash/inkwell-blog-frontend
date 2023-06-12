import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card, CardContent, Typography, CardActions, Button,
} from '@mui/material';

const Post = ({ post }) => {
  const { id, title, content } = post;
  return (
    <Card className="w-1/2">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
      <CardActions>

        <Button component={Link} to={`/posts/${id}`} size="small">Read More</Button>
      </CardActions>
    </Card>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
