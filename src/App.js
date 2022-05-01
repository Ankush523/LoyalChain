import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './pages/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Campaign from './pages/Campaign';
import Buyget from './components/Buyget';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Campaign' element={<Campaign/>}/>
        <Route path='/Campaign/BuyGet' element={<Buyget/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
