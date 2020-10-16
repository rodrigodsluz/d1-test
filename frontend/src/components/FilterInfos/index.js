import React, { useState } from 'react';

import { useDataValue } from '../../context/data';

import api from '../../services/api';

import './index.css';

const FilterInfos = ( { id , amount, name } ) => {
    const [dispatch] = useDataValue();
    const [status, setStatus] = useState(false);
    const [check, setCheck] = useState(false);

    const handleOnchange = (e) => {
        setStatus(!status);
        setCheck(e.target.check);
    }
 
    const chosenJourney = (id) => {
        if(id !== 0){
            api.get( 'journey/' + id).then(response => 
                dispatch({
                    type: 'SET_JOURNEY',
                    journey: response.data
                }),
            );
        }
        else {
            api.get( 'journey' ).then(response => 
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
                onClick={ () => ( chosenJourney(id) ) } 
                onChange={handleOnchange}
                /*  */
                defaultChecked={check}
                data-status={status}
                /*  */
            />
            <label htmlFor={id}>
                <span className={'itemJornadas ' + status} id={id}>
                    <p className={'svgbox Itemsvg' + id} />

                    <p className='name'> {name} </p>

                    <p className='number'> {amount} </p>
                </span>
            </label>
        </>
    )

}

export default FilterInfos;