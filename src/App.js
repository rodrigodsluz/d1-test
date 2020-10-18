import React, {useEffect} from 'react';

import SideBar from './components/Sidebar';
import Header from './components/Header';
import Filter from './components/Filter';
import Journey from './components/Journey';

import api from './services/api';
import { useDataValue } from './context/data';

import './App.css';

const App = () => {
  const [journey, dispatch] = useDataValue();

  useEffect(() => {
    if(journey){
      api.get('filter').then(response => 
        dispatch({
          type: 'SET_FILTER',
          filter: response.data
        }),
      );
    }
  }, [dispatch, journey]); 

  return (
    <>
      <SideBar/>
      <div className="container">
        <Header/>
        <div className="content">
          <div className="filter">
            <h2>Jornadas</h2>
            <Filter/>
          </div>

          <div className="journeys">
            <Journey/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
