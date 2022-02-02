
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
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/richmond-road" element = {<Gallery/>}/>
        <Route path="" element={<Press/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/contact-us" element={<Connect/>}/>

      </Routes>
    </Navigation>
  );
}

export default App;
