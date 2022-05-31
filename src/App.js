import logo from './logo.svg';
import './Css/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BottomNavbar from './components/BottomNavbar.js';
import Navbar from './components/Navbar.js';
import Search from  './components/Search.js';
import AddBottle from './components/AddBottle.js';
import Degustations from './components/Degustations.js';
import Metrics from './components/Metrics.js';
import MisedeCote from './components/MisedeCote.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/">
          <Search />
        </Route>
        <Route  path="/extracted">
          <MisedeCote />
        </Route>
        <Route  path="/add">
          <AddBottle />
        </Route>
        <Route  path="/degustations">
          <Degustations />
        </Route>
        <Route  path="/metrics">
          <Metrics />
        </Route>
      </Routes>
      <BottomNavbar/>
    </BrowserRouter>
  );
}

export default App;
