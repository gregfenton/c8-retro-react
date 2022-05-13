import { NavBar } from './components/NavBar';
import { LeftMenuBar } from './components/LeftMenuBar';
import { MainPage } from './pages/MainPage';
import { useState } from 'react';
import { DetailsPage } from './pages/DetailsPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div style={{ height: '100vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '20% 80%' }}>
        <NavBar />
        <LeftMenuBar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='details' element={<DetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
