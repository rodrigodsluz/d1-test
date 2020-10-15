import React from 'react';

//import api from './service/api';

import SideBar from './components/Sidebar';
import Header from './components/Header';


import './App.css';

const App = () => {
  return (
    <>
      <SideBar />
      <div className="container">
      <Header />


      </div>
    </>
  );
}

export default App;
