import {BrowserRouter as Router, Routes, Route, useLocation, } from 'react-router-dom';
import React from 'react';
import Header from './pages/header';
import Footer from './pages/footer';
import Home from './pages/Home';
import Batiment from './pages/Batiment';
import Service from './pages/Service';
import Fabrication from './pages/Fabrication';
import Alimentation from './pages/Alimentation';
import Mentions from './pages/Mantion';
import Data from './pages/Datas';
import Accessibility from './pages/Accessibilite';
import Cookies from './pages/Cookies';
import Artisan from './pages/Artisan';
import NotFound from './pages/NotFound';

function App() {


  const location = useLocation();
  const pathFound = ['/', '/batiment', '/service', '/fabrication', '/alimentation', '/mention', '/data', '/access', '/cookie', 
  '/artisan'];
  const headerFooter = pathFound.includes(location.pathname) || location.pathname.startsWith('/artisan');

  return (
    <div className="App">
      {headerFooter && <Header/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/batiment' element={<Batiment/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/fabrication' element={<Fabrication/>}/>
        <Route path='/alimentation' element={<Alimentation/>}/>
        <Route path='/mention' element={<Mentions/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/access' element={<Accessibility/>}/>
        <Route path='/cookie' element={<Cookies/>}/>
        <Route path='/artisan/:id' element={<Artisan/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      {headerFooter && <Footer/>}
    </div>
  );
  
}


export default App;
