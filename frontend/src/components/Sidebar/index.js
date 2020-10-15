import React from 'react';

import Tooltip from 'react-simple-tooltip';

import whiteLogo from '../../assets/images/logotipo-branco.png';

import chartPie from '../../assets/icons/chart-pie.svg';
import rocket from '../../assets/icons/rocket.svg';
import userFriends from '../../assets/icons/user-friends.svg';
import ccmCloud from '../../assets/icons/ccm-cloud.svg';
import externalLink from '../../assets/icons/external-link-alt-solid.svg';
import gem from '../../assets/icons/gem.svg';
import tools from '../../assets/icons/tools.svg';
import exchange from '../../assets/icons/exchange-alt.svg';
import signOut from  '../../assets/icons/sign-out-alt.svg';

import cx from 'clsx';

import './index.css';

const Sidebar = () => {
    return(
        <div className="sideBar">
            <span className={cx('blueTopDivider', 'blueDivider')}></span>
            
            <img src={whiteLogo} alt="Logo branca"/>

            <div className="iconsContainer">
                <div className="iconsAbove">
                        <Tooltip 
                                content="Gráficos"
                                color='#1A1731'
                                background='#9196AB'
                                placement='right'
                                fontSize='15'
                                padding={11}
                                radius={6}
                                arrow={9}
                        >       
                                <div className="icons">
                                <img src={chartPie} alt="Gráficos"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="Jornadas"
                                color='#1A1731'
                                background='#9196AB'
                                placement='right'
                                fontSize='15'
                                padding={11}
                                radius={6}
                                arrow={9}
                        >
                                <div className="icons">
                                <img src={rocket} alt="Jornadas"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="Amigos"
                                color='#1A1731'
                                background='#9196AB'
                                placement='right'
                                fontSize='15'
                                padding={11}
                                radius={6}
                                arrow={9}
                        >
                                <div className="icons">
                                <img src={userFriends} alt="Amigos"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="CCM Cloud"
                                color='#1A1731'
                                background='#9196AB'
                                placement='right'
                                fontSize='15'
                                padding={11}
                                radius={6}
                                arrow={9}
                        >
                                <div className="icons">
                                <img src={ccmCloud} alt="CCM Cloud"/>
                                </div>
                        </Tooltip>

                        <span className='blueMiddleDivider'></span>

                        <Tooltip 
                                content="Link externo"
                                color='#1A1731'
                                background='#9196AB'
                                placement='right'
                                fontSize='15'
                                padding={11}
                                radius={6}
                                arrow={9}
                        >
                                <div className="icons">
                                <img src={externalLink} alt="Link externo"/>
                                </div>
                        </Tooltip>
                </div>

                <div className="iconsBelow">
                        <Tooltip 
                                content="GEM"
                                color='#1A1731'
                                background='#9196AB'
                                placement='right'
                                fontSize='15'
                                padding={11}
                                radius={6}
                                arrow={9}
                        >
                                <div className="icons">
                                <img src={gem} alt="GEM"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="Ferramentas"
                                color='#1A1731'
                                background='#9196AB'
                                placement='right'
                                fontSize='15'
                                padding={11}
                                radius={6}
                                arrow={9}
                        >
                                <div className="icons">
                                <img src={tools} alt="Ferramentas"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="Switch"
                                color='#1A1731'
                                background='#9196AB'
                                placement='right'
                                fontSize='15'
                                padding={11}
                                radius={6}
                                arrow={9}
                        >
                                <div className="icons">
                                <img src={exchange} alt="Switch"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="Sair"
                                color='#1A1731'
                                background='#9196AB'
                                placement='right'
                                fontSize='15'
                                padding={11}
                                radius={6}
                                arrow={9}
                        >
                                <div className="icons">
                                <img src={signOut} alt="Sair"/>
                                </div>
                        </Tooltip>
                </div>
            </div>
            <span className={cx('blueBottomDivider', 'blueDivider')}></span>

        </div>
    )
}

export default Sidebar;