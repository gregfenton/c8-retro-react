import { NavBar } from './components/NavBar';
import { LeftMenuBar } from './components/LeftMenuBar';
import { MainPage } from './pages/MainPage';
import { useState } from 'react';
import { DetailsPage } from './pages/DetailsPage';

function App() {
  const [pageToShow, setPageToShow] = useState('main');

  return (
    <div style={{ height: '100vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '20% 80%' }}>
        <NavBar />
        <LeftMenuBar switchPage={setPageToShow} />
        {pageToShow === 'main' ? (
          <MainPage />
        ) : (
          <DetailsPage/>
        )}
      </div>
    </div>
  );
}

export default App;
