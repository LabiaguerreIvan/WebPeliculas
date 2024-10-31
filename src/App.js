import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ListMovies from './views/ListMovies';
import Blog from './views/Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {



  // ESTRUCTURA JSX QUE DEVUELVE UNA VISTA
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListMovies />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
