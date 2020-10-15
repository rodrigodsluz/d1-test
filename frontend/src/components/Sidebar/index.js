import React from 'react';

import Tooltip from 'react-simple-tooltip';

import whiteLogo from '../../assets/images/logotipo-branco.png';

import chartPieIcon from '../../assets/icons/chart-pie.svg';
import rocketIcon from '../../assets/icons/rocket.svg';
import userFriendsIcon from '../../assets/icons/user-friends.svg';
import ccmCloudIcon from '../../assets/icons/ccm-cloud.svg';
import externalLinkIcon from '../../assets/icons/external-link-alt-solid.svg';
import gemIcon from '../../assets/icons/gem.svg';
import toolsIcon from '../../assets/icons/tools.svg';
import exchangeIcon from '../../assets/icons/exchange-alt.svg';
import signOutIcon from  '../../assets/icons/sign-out-alt.svg';

import cx from 'clsx';

import './index.css';

const Sidebar = () => {
    return(
        <div className="sideBar">
            <span className={cx('blueTopDivider', 'blueDivider')}></span>
            
            <img src={whiteLogo} alt="Logo branca"/>

            <div className="iconsContainer">
                <div className="topIcons">
                        <Tooltip 
                                content="Gráficos"
                                fontSize='15'
                                placement='right'
                                background='#9196AB'
                                color='#1A1731'
                                padding={11}
                        >       
                                <div className="icons">
                                <img src={chartPieIcon} alt="Gráficos"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="Jornadas"
                                fontSize='15'
                                placement='right'
                                background='#9196AB'
                                color='#1A1731'
                                padding={11}
                        >
                                <div className="icons">
                                <img src={rocketIcon} alt="Jornadas"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="Amigos"
                                fontSize='15'
                                placement='right'
                                background='#9196AB'
                                color='#1A1731'
                                padding={11}
                        >
                                <div className="icons">
                                <img src={userFriendsIcon} alt="Amigos"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="CCM Cloud"
                                fontSize='15'
                                placement='right'
                                background='#9196AB'
                                color='#1A1731'
                                padding={11}
                        >
                                <div className="icons">
                                <img src={ccmCloudIcon} alt="CCM Cloud"/>
                                </div>
                        </Tooltip>

                        <span className='blueMiddleDivider'></span>

                        <Tooltip 
                                content="Link externo"
                                fontSize='15'
                                placement='right'
                                background='#9196AB'
                                color='#1A1731'
                                padding={11}
                        >
                                <div className="icons">
                                <img src={externalLinkIcon} alt="Link externo"/>
                                </div>
                        </Tooltip>
                </div>

                <div className="bottomIcons">
                        <Tooltip 
                                content="GEM"
                                fontSize='15'
                                placement='right'
                                background='#9196AB'
                                color='#1A1731'
                                padding={11}
                        >
                                <div className="icons">
                                <img src={gemIcon} alt="GEM"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="Ferramentas"
                                fontSize='15'
                                placement='right'
                                background='#9196AB'
                                color='#1A1731'
                                padding={11}
                        >
                                <div className="icons">
                                <img src={toolsIcon} alt="Ferramentas"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="Switch"
                                fontSize='15'
                                placement='right'
                                background='#9196AB'
                                color='#1A1731'
                                padding={11}
                        >
                                <div className="icons">
                                <img src={exchangeIcon} alt="Switch"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="Sair"
                                fontSize='15'
                                placement='right'
                                background='#9196AB'
                                color='#1A1731'
                                padding={11}
                        >
                                <div className="icons">
                                <img src={signOutIcon} alt="Sair"/>
                                </div>
                        </Tooltip>
                </div>
            </div>
            <span className={cx('blueBottomDivider', 'blueDivider')}></span>

        </div>
    )
}

export default Sidebar;