import React, { useState } from 'react';
import { Button, Typography, Paper, Box } from '@mui/material';

const Counter = () => {
  // Basic state management using useState hook
  const [count, setCount] = useState(0);

  // Event handlers
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <Paper elevation={3} sx={{ p: 3, m: 2 }}>
      <Typography variant="h4" gutterBottom>
        Counter Example
      </Typography>
      
      <Typography variant="body1" gutterBottom>
        This is a basic example demonstrating:
        <ul>
          <li>useState Hook</li>
          <li>Event Handling</li>
          <li>Component Organization</li>
        </ul>
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 3 }}>
        <Button variant="contained" color="primary" onClick={decrement}>
          -
        </Button>
        <Typography variant="h5">{count}</Typography>
        <Button variant="contained" color="primary" onClick={increment}>
          +
        </Button>
      </Box>

      <Button variant="outlined" onClick={reset}>
        Reset
      </Button>
    </Paper>
  );
};

export default Counter;
