import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home';
import News from './pages/news';
import Food from './pages/food';
import Outdoors from './pages/outdoors';
import DonairKing from './pages/donair-king';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/food' element={<Food />} />
        <Route path='/outdoors' element={<Outdoors />} />
        <Route path='/donair-king' element={<DonairKing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
