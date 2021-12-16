import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Buy from './components/pages/Buy';
import Sell from './components/pages/Sell';

import CarState from './context/car/CarState';
import './App.css';

const App = () => {
  return (
    <CarState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/buy' element={<Buy />} />
              <Route path='/sell' element={<Sell />} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </CarState>
  );
};

export default App;
