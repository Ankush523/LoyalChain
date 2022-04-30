import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './pages/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Campaign from './pages/Campaign';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Campaign' element={<Campaign/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
