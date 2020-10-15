import React, { useState } from 'react';

import Tooltip from 'react-simple-tooltip';

import Search from '../Search';
import Modal from '../Modal';

import plusIcon from '../../assets/icons/plus.svg';
import acmeLogo from '../../assets/images/acme-logo.png';

import './index.css';

const Header = () => {
    const useModal = () => {
        const [isShowing, setIsShowing] = useState(false);
      
        function toggle() {
          setIsShowing(!isShowing);
        }
      
        return {
          isShowing,
          toggle,
        }
    };

    const {isShowing, toggle} = useModal();

    return(
        <div className="container">
            <div className="leftHeader">
                <Tooltip 
                    content="Albert Einstein"
                    fontSize='15'
                    placement='left'
                    background='#9196AB'
                    color='#1A1731'
                    padding={11}
                >
                    <span className='user'>A</span>
                </Tooltip>
                <div className="companyLogo">
                    <img src={acmeLogo} alt="Logo da empresa"/>
                </div>
            </div>

            <div className="rightHeader">
                    <input type="text" placeholder='Buscar'/>

                    <span className='img'></span>
                                    
                <button type='button' className='journeyButton' onClick={toggle}> 
                   <img src={plusIcon} alt="Adicione uma Nova Jornada"/>  
                   Nova Jornada
                </button>

                <Modal isShowing={isShowing} hide={toggle} />
            </div>

        </div>
    )
}

export default Header;
