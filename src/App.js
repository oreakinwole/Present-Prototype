import React from 'react';
import styled from 'styled-components';
import headPic from './images/headpic.png';
import caret from './images/caret.svg';
import locationIcon from './images/location.svg';

const MainWrapper = styled.div`
    width: 100%;
        header {
            width: 100%;
            height: 1033px;
            background: #fff url(${headPic}) no-repeat center;

            padding: 0 56px;

            font-style: normal;

            button{ border: none; background: #000; color: #fff;}
            nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .left{
                    width: 350px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                        p{
                            font-weight: bold;
                            font-size: 32px;
                            line-height: 48px;
                        }
                }

                .right{
                    button {
                        width: 112px;
                        height: 40px;
                        border-radius: 6px;
                    }
                }
            }

            main {
                // width: 90%;
                margin-top: 20vh;
                p {
                    margin-bottom: 30px;

                    font-weight: 500;
                    font-size: 48px;
                    line-height: 72px;

                    color: #000;
                }

                select {
                    border: none;
                    height: 56px;
                    width: 552px;
                    border-radius: 5px;
                    
                    appearance: none;
                    background: url(${locationIcon}) left 20px top 50% no-repeat, url(${caret}) right 20px top 50% no-repeat;
                    background-color: #fff;
                    padding: 0 26px 0 48px !important;

                    font-weight: normal;
                    font-size: 16px;
                    line-height: 24px;
                    color: #000;

                    :nth-of-type(2){ width: 184px; margin-left: 16px; }
                }

                button{
                    width: 120px;
                    height: 56px;
                    color: white
                    border-radius: 5px;
                    margin-left: 16px;
                }

                .cta {
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 18px;
                    /* identical to box height */


                    color: #000000;
                }
            }
        }
`;


const App = () => (
    <MainWrapper>
        <header>
            <nav>
                <div className="left">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 15H19M1 1H19H1ZM1 8H10H1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C7.72665 0 5.5464 0.948211 3.9389 2.63604C2.3314 4.32387 1.42831 6.61305 1.42831 9V14.379L0.41828 15.4395C0.218546 15.6493 0.0825326 15.9165 0.0274344 16.2075C-0.0276638 16.4984 0.000627092 16.7999 0.10873 17.074C0.216834 17.348 0.399896 17.5823 0.634774 17.7471C0.869653 17.9119 1.1458 17.9999 1.42831 18H18.5717C18.8542 17.9999 19.1303 17.9119 19.3652 17.7471C19.6001 17.5823 19.7832 17.348 19.8913 17.074C19.9994 16.7999 20.0277 16.4984 19.9726 16.2075C19.9175 15.9165 19.7815 15.6493 19.5817 15.4395L18.5717 14.379V9C18.5717 6.61305 17.6686 4.32387 16.0611 2.63604C14.4536 0.948211 12.2734 0 10 0ZM10 24C8.86332 24 7.7732 23.5259 6.96945 22.682C6.1657 21.8381 5.71416 20.6935 5.71416 19.5H14.2858C14.2858 20.6935 13.8343 21.8381 13.0306 22.682C12.2268 23.5259 11.1367 24 10 24Z" fill="black" />
                    </svg>

                    <p>Blackpeppereats</p>
                </div>

                <div className="right"><button>Sign in</button></div>

            </nav>

            <main>
                <p>What are you eating Today?</p>
                <select> <option>Select Closest BlackBells to you</option> </select>
                <select> <option>Deliver now</option> </select>
                <button>Get Food</button>
                <p className="cta">Sign up for extra features</p>
            </main>
        </header>

    </MainWrapper>
);

export default App;
