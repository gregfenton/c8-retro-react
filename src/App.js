import { NavBar } from "./components/NavBar";
import { LeftMenuBar } from "./components/LeftMenuBar";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '20% 80%' }}>
        <NavBar />
        <LeftMenuBar />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
