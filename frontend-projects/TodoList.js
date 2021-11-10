import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
  Typography,
  Checkbox,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  // Multiple state variables
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');

