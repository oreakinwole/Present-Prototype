import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LayoutWrapper } from '../../../components/reusablestyles/GlobalStyle';
import headphoneIcon from '../../../assets/headphone.svg';
import todoIcon from '../../../assets/todo.svg';
import lockIcon from '../../../assets/locked.svg';
import nextIcon from '../../../assets/next.png';

const StartWrapper = styled.div`
    background: #2D4B97;
    max-width: 500px;
    width: 100%;
    min-height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
        header {
            h2 {
                color: #E6E6E6;
                text-transform: uppercase;
                max-width: 300px;
                text-align: center;
                line-height: 1.4em;
                letter-spacing: .3px;
            }
        }
        h3 {
            color: #E4DAF1;
            text-transform: uppercase;
            max-width: 200px;
            text-align: center;
        }
        .facet-div {
            width: 120px;
            height: 120px;
            background: #E4DAF1;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .4s;
            cursor: pointer;
            img {
                width: 60%;
            }
            &:hover{
                background: white;
                transform: scale(1.2);
            }
        }
        .next-div {
            width: 70px;
            cursor: pointer;
            img {
                width: 100%;
            }
            &:focus {
                outline: none;
            }
        }
`;

const Start = () => (
    <LayoutWrapper>
        <StartWrapper>
            <header>
                <h2>
                    what you can do &nbsp;
                    <u>w</u>
                    ith
                    present
                </h2>

            </header>
            <Link to="/meditate">
                <div className="facet-div">
                    <img src={headphoneIcon} alt="speak" />
                </div>
            </Link>
            <h3>meditate</h3>

            <Link to="/todov2">
                <div className="facet-div">
                    <img src={todoIcon} alt="todo list" />
                </div>
            </Link>
            <h3>create a todo list</h3>

            <div className="facet-div">
                <img src={lockIcon} alt="speak" />
            </div>
            <h3>lock your phone for a period</h3>

            <div className="next-div">
                <Link to="/profile"><img src={nextIcon} alt="next" /></Link>
            </div>
        </StartWrapper>
    </LayoutWrapper>
);

export default Start;
