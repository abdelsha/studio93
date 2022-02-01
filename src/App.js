
import { Route, Routes } from 'react-router';
import './App.css';
import Navigation from './Navigation/Navigation';
import Aboutus from './Pages/Aboutus/Aboutus';
import Connect from './Pages/Connect/Connect';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home';
import Press from './Pages/Press/Press';

function App(props) {
  return (
    
    <Navigation>
      <Routes>
        <Route path="/" exact={true}>
          <Home/>
        </Route>
        <Route path="/richmond-road">
          <Gallery/>
        </Route>
        <Route path="">
          <Press/>
        </Route>
        <Route path="/about">
          <Aboutus/>
        </Route>
        <Route path="/contact-us">
          <Connect/>
        </Route>
      </Routes>
    </Navigation>
  );
}

export default App;
