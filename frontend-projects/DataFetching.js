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
