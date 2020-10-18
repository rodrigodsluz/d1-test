import React, { useState } from 'react';

import { useDataValue } from '../../context/data';
import api from '../../services/api';

import './index.css';

const FilterItem = ({id, quantity, name}) => {
    const [{journey},dispatch] = useDataValue();
    const [active, setActive] = useState(false)
    const [check, setCheck ] = useState(false)

    const handleChange = (event) => {
        setActive(!active)
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
                data-active={active}
                journey={journey}
                defaultChecked={check}
            />
            <label htmlFor={id}>
                <span className={ 'filterItens ' + active } id={id} >
                    <p className={ 'svg icon' + id } />

                    <p className='name'>{name}</p>

                    <p className='number'> {quantity}</p>
                </span>
            </label>
        </>
    )
}

export default FilterItem;