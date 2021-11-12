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

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newTodo.trim()) {
      setError('Todo cannot be empty');
      return;
    }

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo,
        completed: false,
      },
    ]);
    setNewTodo('');
    setError('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Paper elevation={3} sx={{ p: 3, m: 2 }}>
      <Typography variant="h4" gutterBottom>
        Todo List
      </Typography>

      <Typography variant="body1" gutterBottom>
        This example demonstrates:
        <ul>
          <li>Form handling</li>
          <li>Multiple state variables</li>
          <li>useEffect for side effects</li>
          <li>Local storage integration</li>
          <li>List rendering with keys</li>
          <li>Conditional rendering</li>
        </ul>
      </Typography>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <TextField
          fullWidth
          variant="outlined"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          error={!!error}
          helperText={error}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" type="submit">
          Add Todo
        </Button>
      </form>

      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} dense>
            <Checkbox
              edge="start"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <ListItemText
              primary={todo.text}
              sx={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
