import React, { useState } from 'react';

import Tooltip from 'react-simple-tooltip';

import AddJourneyModal from '../AddJourneyModal';

import plusIcon from '../../assets/icons/plus.svg';
import acmeLogo from '../../assets/images/acme-logo.png';

import './index.css';

const Header = () => {
    const useModal = () => {
        const [isOpened, setIsOpened] = useState(false);
        const trigger = () => {
          setIsOpened(!isOpened);
        }
        return {
          isOpened,
          trigger,
        }
    };

    const {isOpened, trigger} = useModal();

    return(
        <div className="container">
            <div className="leftHeader">
                <Tooltip 
                    content="Antônio da Silva"
                    fontSize='15'
                    placement='right'
                    background='#3E4157'
                    color='#FFFF'
                    padding={10}
                    border='none'
                    radius={8}
                    className="noWrapIcon"
                >
                    <span className='user'>A</span>
                </Tooltip>
                <div className="companyLogo">
                    <img src={acmeLogo} alt="Logo da empresa"/>
                </div>
            </div>

            <div className="rightHeader">
                    <input type="text" placeholder='Buscar'/>

                    <span className='lupa'></span>

                <button type='button' className='journeyButton' onClick={trigger}> 
                   <img src={plusIcon} alt="Adicione uma Nova Jornada"/>  
                   Nova Jornada
                </button>

                <AddJourneyModal trigger={trigger} isOpened={isOpened}/>
            </div>

        </div>
    )
}

export default Header;