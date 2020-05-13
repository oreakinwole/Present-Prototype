import React from 'react';
import styled from 'styled-components';
import menuIcon from '../assets/hamburger-white.svg';
import dotsIcon from '../assets/3dots.png';

const HeaderCon = styled.div`
    background-color: #20243f;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: white;
        img{
            cursor: pointer;
        }
        img:nth-child(1){
            width: 30px;
        }
        
`;

const Header = ({ title }) => (
    <HeaderCon>
        <div><img src={menuIcon} alt="menu" /></div>
        <h2>
            {title}
        </h2>
        <div><img src={dotsIcon} alt="menu" /></div>
    </HeaderCon>
);

export default Header;
