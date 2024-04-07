import { useEffect } from 'react'
import './App.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NorwayPage from './pages/norway';
import SrilankaPage from './pages/srilanka';
import SingaporePage from './pages/singapore';
import ParisPage from './pages/paris';
import MalaysiaPage from './pages/malaysia';
import ThailandPage from './pages/thailand';
import MorePlaces from './pages/morePlaces';


function App() 
{
  window.scrollTo(0,0)
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className='home'>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/norway' Component={NorwayPage}></Route>
          <Route path='/srilanka' Component={SrilankaPage} ></Route>
          <Route path='/singapore' Component={SingaporePage} ></Route>
          <Route path='/paris' Component={ParisPage} ></Route>
          <Route path='/malaysia' Component={MalaysiaPage} ></Route>
          <Route path='/thailand' Component={ThailandPage} ></Route>
          <Route path='/morePlaces' Component={MorePlaces}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
