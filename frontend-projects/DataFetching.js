import React, { useState, useEffect } from 'react';
import {
  Paper,
  Typography,
  CircularProgress,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Alert,
} from '@mui/material';

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data.slice(0, 10)); // Limit to 10 posts
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

