import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NaveBar from './component/NaveBar';
import HomePage from './Pages/home/home';
import './App.css'
import DiscoverPage from './Pages/DiscoverPage';

function App() {

  return (
    <Router>
      <div className="">
        <div className='fixed top-0 right-0 left-0 bg-white z-10 drop-shadow-md'>
          <NaveBar />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Discover" element={<DiscoverPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
