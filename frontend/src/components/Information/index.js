import React, { useEffect } from 'react';

import api from '../../services/api';

import {useDataValue} from '../../context/data';

import InformationItem from '../InformationItem';

import './index.css';

const Information = () => {
    const [{journey}  , dispatch] = useDataValue();

    useEffect(() => {
        api.get('journey').then(response => 
            dispatch({
                type: 'SET_JOURNEY',
                journey: response.data
            }),
        );
    }, [dispatch]); 

    return(
        <>  
            <div className='journeyContainer'>
                <div className='journeyHeader'>
                    <span className="journeyName">Nome</span>
                    <span className="journeyRecipient">Destinatários</span>
                    <span className="journeySuccess">Sucesso</span>
                    <span className="journeyStatus">Status</span>
                </div>
            
                <div>
                    {journey.map(journeyItem => {
                            return(    
                                <InformationItem 
                                    id={journeyItem.id} 
                                    status={journeyItem.status}
                                    recipients={journeyItem.recipients}
                                    name={journeyItem.name}
                                    success={journeyItem.success}
                                    key={journeyItem.id} 
                                />
                            )
                         })
                    }
                </div>
            </div>
        </>
    )
}

export default Information;
