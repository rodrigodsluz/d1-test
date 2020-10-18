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
            <span className={cx('topPosition', 'blueDivider', 'blueEffect')}></span>
            
            <img src={whiteLogo} alt="Logo branca"/>

            <div className="iconsContainer">
                <div className="topIcons">
                        <Tooltip 
                                content="Análises"
                                fontSize='15'
                                placement='right'
                                background='#FFFF'
                                color='#9196Ab'
                                padding={10}
                                border='none'
                                radius={8}
                        >       
                                <div className="icons">
                                <img src={chartPieIcon} alt="Análises"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="Jornadas"
                                fontSize='15'
                                placement='right'
                                background='#FFFF'
                                color='#9196Ab'
                                padding={10}
                                border='none'
                                radius={8}
                        >
                                <div className="icons">
                                <img src={rocketIcon} alt="Jornadas"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="Clientes"
                                fontSize='15'
                                placement='right'
                                background='#FFFF'
                                color='#9196Ab'
                                padding={10}
                                border='none'
                                radius={8}
                        >
                                <div className="icons">
                                <img src={userFriendsIcon} alt="Clientes"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="CCM Cloud"
                                fontSize='15'
                                placement='right'
                                background='#FFFF'
                                color='#9196Ab'
                                padding={10}
                                border='none'
                                radius={8}
                                className="noWrapIcon"
                        >
                                <div className="icons">
                                <img src={ccmCloudIcon} alt="CCM Cloud"/>
                                </div>
                        </Tooltip>

                        <span className={cx('blueMiddleDivider', 'blueEffect')}></span>

                        <Tooltip 
                                content="Versão 01"
                                fontSize='15'
                                placement='right'
                                background='#FFFF'
                                color='#9196Ab'
                                padding={10}
                                border='none'
                                radius={8}
                                className="noWrapIcon"
                        >
                                <div className="icons">
                                <img src={externalLinkIcon} alt="Versão 01"/>
                                </div>
                        </Tooltip>
                </div>

                <div className="bottomIcons">
                        <Tooltip 
                                content="Administração"
                                fontSize='15'
                                placement='right'
                                background='#FFFF'
                                color='#9196Ab'
                                padding={10}
                                border='none'
                                radius={8}
                        >
                                <div className="icons">
                                <img src={gemIcon} alt="Administração"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="Help Desk"
                                fontSize='15'
                                placement='right'
                                background='#FFFF'
                                color='#9196Ab'
                                padding={10}
                                border='none'
                                radius={8}
                                className="noWrapIcon"
                        >
                                <div className="icons">
                                <img src={toolsIcon} alt="Help Desk"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="Trocar Conta"
                                fontSize='15'
                                placement='right'
                                background='#FFFF'
                                color='#9196Ab'
                                padding={10}
                                border='none'
                                radius={8}
                                className="noWrapIcon"
                        >
                                <div className="icons">
                                <img src={exchangeIcon} alt="Trocar Conta"/>
                                </div>
                        </Tooltip>

                        <Tooltip 
                                content="Sair"
                                fontSize='15'
                                placement='right'
                                background='#FFFF'
                                color='#9196Ab'
                                padding={10}
                                border='none'
                                radius={8}
                        >
                                <div className="icons">
                                <img src={signOutIcon} alt="Sair"/>
                                </div>
                        </Tooltip>
                </div>
            </div>
            <span className={cx('bottomPosition', 'blueDivider', 'blueEffect')}></span>

        </div>
    )
}

export default Sidebar;