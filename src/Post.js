import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import './Post.css'

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='card-container'>
      {posts.map(post => (
        <div key={post.id} >
          <Card className='card'>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
);
};

export default Post;
