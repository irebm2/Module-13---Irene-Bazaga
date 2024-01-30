import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';
import './App.css';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectGallery" element={<ProjectGallery />} />
        <Route path="/contact/*" element={<Contact showForm={showForm} setShowForm={setShowForm} />} />
      </Routes>
    </Router>
  );
};

export default App;