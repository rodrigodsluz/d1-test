import React, { useState } from 'react';

import { useDataValue } from '../../context/data';
import api from '../../services/api';

import './index.css';

const FilterInfos = ({id, quantity, name}) => {
    const [{journey},dispatch] = useDataValue();
    const [status, setStatus] = useState(false)
    const [check, setCheck ] = useState(false)

    const handleChange = event => {
        setStatus(!status)
        setCheck(event.target.check)
  
    }
 
    const chosenJourney = (id) => {
        if(id !== 0){
            api.get('journey/'+ id).then(response => 
                dispatch({
                    type: 'SET_JOURNEY',
                    journey: response.data
                }),
            );
        }
        else {
            api.get('journey').then(response => 
                dispatch({
                    type: 'SET_JOURNEY',
                    journey: response.data
                }),    
            );
        }
    }

    return(
        <>  
            <input 
                type="checkbox" 
                id={id} 
                onChange={handleChange}
                onClick={ () => (chosenJourney(id)) } 
                journey={journey}
                check={check}
            />
            <label htmlFor={id}>
                <span className={ 'filterItens ' + status } id={id} >
                    <p className={ 'svg icon' + id } />

                    <p className='name'>{name}</p>

                    <p className='number'> {quantity}</p>
                </span>
            </label>
        </>
    )
}

export default FilterInfos;