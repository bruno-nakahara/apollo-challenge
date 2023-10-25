import { Outlet } from 'react-router-dom';
import './style/global.css';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
