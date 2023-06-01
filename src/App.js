
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home/Home.jsx';
import { Sales } from './pages/sales/Sales';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/sales" exact element={<Sales/>} />
    </Routes>  
    </>
  );
}

export default App;
