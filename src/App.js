import logo from './logo.svg';
import './Css/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BottomNavbar from './components/BottomNavbar.js';
import Navbar from './components/Navbar.js';
import Search from  './components/Search.js';
import AddBottle from './components/AddBottle.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
      </Switch>
      <BottomNavbar/>
    </div>
    </BrowserRouter>
  );
}

export default App;
