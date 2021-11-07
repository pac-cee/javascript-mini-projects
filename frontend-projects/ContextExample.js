import React from 'react';
import {
  Paper,
  Typography,
  Switch,
  FormControlLabel,
  Box,
} from '@mui/material';
import { useTheme } from '../../context/ThemeContext';

const ThemedComponent = () => {
  const { colors } = useTheme();
  
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: colors.background,
        color: colors.text,
        borderRadius: 1,
        transition: 'all 0.3s ease',
      }}
    >
      <Typography variant="h6">
        This component uses the theme context
      </Typography>
      <Typography>
        The background and text colors of this component are controlled by the theme context.
      </Typography>
    </Box>
  );
};

const ContextExample = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Paper elevation={3} sx={{ p: 3, m: 2 }}>
      <Typography variant="h4" gutterBottom>
        Context API Example
      </Typography>

      <Typography variant="body1" gutterBottom>
        This example demonstrates:
        <ul>
          <li>Context API usage</li>
          <li>Custom hooks</li>
          <li>Theme switching</li>
          <li>Component composition</li>
          <li>State sharing between components</li>
        </ul>
      </Typography>

      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={toggleTheme}
            color="primary"
          />
        }
        label="Dark Mode"
        sx={{ mb: 2 }}
