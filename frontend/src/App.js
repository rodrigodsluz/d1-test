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

        <div className="content">
          <div className="journeys">
            <h2>Jornadas</h2>

           

          </div>

          <div className="informations">

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
