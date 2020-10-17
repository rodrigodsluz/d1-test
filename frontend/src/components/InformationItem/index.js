import React from 'react';

import Status from '../Status';

import './index.css';

const JourneyItem = ({id, status, recipients, name, success}) => {
    const filterStatus = () => {
        switch (status){
            case 1:
                return (
                    <Status description='Em execução' status={status} />
                );
            case 2:
                return (
                    <Status description='Ativa' status={status} />
                ); 
            case 3:
                return (
                    <Status description='Configurando' status={status} />
                );
            case 4:
                return (
                    <Status description='Ociosa' status={status} />
                );
            case 5:
                return (
                    <Status description='Concluída' status={status} />
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

            {filterStatus()}
        </div>
    )
}

export default JourneyItem;
