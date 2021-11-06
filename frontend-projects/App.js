import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/basics/Navigation';
import Home from './components/basics/Home';
import Counter from './components/basics/Counter';
import TodoList from './components/basics/TodoList';
import UserProfile from './components/intermediate/UserProfile';
import DataFetching from './components/intermediate/DataFetching';
import ReduxExample from './components/advanced/ReduxExample';
import ContextExample from './components/advanced/ContextExample';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/todo" element={<TodoList />} />
