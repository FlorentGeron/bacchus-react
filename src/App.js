import logo from './logo.svg';
import './Css/App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BottomNavbar from './components/BottomNavbar.js';
import Navbar from './components/Navbar.js';
import Search from  './components/Search.js';
import AddBottle from './components/AddBottle.js';
import Degustations from './components/Degustations.js';
import Metrics from './components/Metrics.js';
import MisedeCote from './components/MisedeCote.js';
import Settings from './components/Settings.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route  path="extracted" element={<MisedeCote />} />
        <Route  path="add" element={<AddBottle />} />
        <Route  path="degustations" element={<Degustations />} />
        <Route  path="metrics" element={<Metrics />} />
        <Route  path="settings" element={<Settings />} />
      </Routes>
      <BottomNavbar/>
    </BrowserRouter>
  );
}

export default App;
