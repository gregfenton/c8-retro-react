import { NavBar } from './components/NavBar';
import { LeftMenuBar } from './components/LeftMenuBar';
import { MainPage } from './pages/MainPage';
import { DetailsPage } from './pages/DetailsPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '20% 80%',
        gridTemplateRows: 'auto 1fr',
        height: '100vh',
      }}
    >
      <NavBar />
      <LeftMenuBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='details' element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
