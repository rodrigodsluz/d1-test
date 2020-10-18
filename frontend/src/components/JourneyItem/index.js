import React from 'react';

import JourneyStatus from '../JourneyStatus';

import './index.css';

const JourneyItem = ({id, status, recipients, name, success}) => {
    const filterJourneyStatus = () => {
        switch (status){
            case 1:
                return (
                    <JourneyStatus description='Em execução' status={status} />
                );
            case 2:
                return (
                    <JourneyStatus description='Ativa' status={status} />
                ); 
            case 3:
                return (
                    <JourneyStatus description='Configurando' status={status} />
                );
            case 4:
                return (
                    <JourneyStatus description='Ociosa' status={status} />
                );
            case 5:
                return (
                    <JourneyStatus description='Concluída' status={status} />
                );  
            default:
                break;
        }
    }
    return(
        <div key={id} className='journeyItens'> 
            <span className='journeyItemName'>
                {name}
            </span>

            <span className='journeyItemRecipient'>
                {recipients}
            </span>

            <span className='journeyItemSuccess'>
                {success}
            </span>

            {filterJourneyStatus()}
        </div>
    )
}

export default JourneyItem;
