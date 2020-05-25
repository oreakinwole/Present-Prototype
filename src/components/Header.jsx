import React from 'react';
import styled from 'styled-components';
import menuIcon from '../assets/hamburger-white.svg';
import dotsIcon from '../assets/3dots.png';

const HeaderCon = styled.div`
    position: fixed;
    top: 0;
    background-color: #20243f;
    max-width: 500px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: white;
        img{
            width: 30px;
            cursor: pointer;
        }

`;

const Header = ({ title, toggleSB }) => (
    <HeaderCon>
        <div
            role="button"
            onClick={toggleSB}
            onKeyPress={toggleSB}
            tabIndex={0}
        >
            <img src={menuIcon} alt="menu" />
        </div>
        <h2>
            {title}
        </h2>
        <div><img src={dotsIcon} alt="menu" /></div>
    </HeaderCon>
);

export default Header;
