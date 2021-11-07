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

  return (
    <Paper elevation={3} sx={{ p: 3, m: 2 }}>
      <Typography variant="h4" gutterBottom>
        Data Fetching Example
      </Typography>

      <Typography variant="body1" gutterBottom>
        This example demonstrates:
        <ul>
          <li>API integration with fetch</li>
          <li>Loading states</li>
          <li>Error handling</li>
          <li>Search functionality</li>
          <li>useEffect for data fetching</li>
        </ul>
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        label="Search posts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 3 }}
      />

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {filteredPosts.map((post) => (
            <Grid item xs={12} key={post.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {post.title}
