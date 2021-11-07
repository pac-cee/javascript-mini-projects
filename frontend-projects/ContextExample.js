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
