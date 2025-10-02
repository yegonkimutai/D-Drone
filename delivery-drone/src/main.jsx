import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import "./index.css";
import Navigation from './components/Navigation';
import Notifications from './components/Notifications';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/maps' element={<Navigation />} />
    <Route path='/notifications' element={<Notifications />} />
  </Routes>
  </BrowserRouter>
  </StrictMode>,
)
