import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './pages/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Campaign from './pages/Campaign';
import Buyget from './components/Buyget';
import Points from './components/Points';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Campaign' element={<Campaign/>}/>
        <Route path='/Campaign/BuyGet' element={<Buyget/>}/>
        <Route path='/Campaign/Points' element={<Points/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
