import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Common/Navbar';

const App = () => (
  <div>
    <Navbar/>
    <Outlet /> 
  </div>
);

export default App;