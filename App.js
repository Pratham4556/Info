import React from 'react';
import { Routes } from 'react-router-dom';
import './App.css';
import { BrowserRouter,Route,Router } from 'react-router-dom';
import Home from './Features/Home';
import Email from './Features/Email';
import Phone from './Features/Phone';
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Phone' element={<Phone />} />
        <Route path='/Email' element={<Email/>} />
      </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
