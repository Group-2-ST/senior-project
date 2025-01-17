// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
