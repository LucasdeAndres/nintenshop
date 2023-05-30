
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home/Home.jsx';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" exact element={<Home/>} />
    </Routes>  
    </>
  );
}

export default App;
