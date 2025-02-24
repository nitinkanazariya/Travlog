import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NaveBar from './component/NaveBar';
import HomePage from './Pages/home/home';
import './App.css'
import DiscoverPage from './Pages/DiscoverPage';

function App() {

  return (
    <Router>
      <div className='flex justify-center  '>
        <div className="max-w-[1920px]  ">
          <div className="bg-white z-10 drop-shadow-md fixed top-0 left-0 right-0 max-w-[1920px] mx-auto">
            <NaveBar />
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Discover" element={<DiscoverPage />} />
          </Routes>
        </div>
      </div>

    </Router>
  );
}

export default App;
