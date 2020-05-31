/* eslint-disable max-lines-per-function */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { retrieveCurUser, removeCurUser } from '../utility';

const SideNavS = styled.aside`
    margin-left: ${({ isOpen }) => (isOpen ? '0px' : '-60%')};
    position: fixed;
    left:0;
    top: 0;
    height: 100vh;
    width: 60%;
    background: black;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: top;
    padding-top: 20px;
    transition: all ease-in-out .8s;
        header{
            width: 100%;
            max-height: 200px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
                .p-pic{
                    cursor: pointer;
                    width: 80px;
                    height: 80px;
                    background: #ebebeb;
                    border-radius: 50%;
                }
                .p-detail{
                    font-size: 20px;
                    color: #ebebeb;
                        .location{
                            font-size: .7em;
                            color: #c4c4c4;
                                span{
                                    margin-right: 10px;
                                    margin-left: 5px;
                                }
                        }
                }
                @media(max-width: 360px) {
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
        }
        .p-nav{
            color: white;
            margin-top: 20px;
                p{
                    width:100%;
                    border-bottom: 2px solid #243676;
                    display: flex;
                    align-items: center;
                    padding-left: 15px;
                    padding-bottom: 10px;
                    padding-top: 10px;
                    font-size: 1.2em;
                    font-weight: lighter;
                    cursor: pointer;
                    @media(max-width: 360px) {
                        font-size: 1em;
                    }
                        svg{
                            width: 30px;
                            height: 30px;
                            margin-right: 15px;
                            fill: #db1c2e;
                            @media(max-width: 360px) {
                                width: 20px;
                                height: 20px;
                            }
                        }
                }
            @media(max-width: 360px) {
                margin-top: 0px;
            }
        }
`;

const SideNav = ({ open }) => {
    const history = useHistory();
    const direct = loc => history.push(loc);
    const doLogout = () => setTimeout(() => {
        removeCurUser();
        history.push('/');
    }, 1000);

    return (
        <SideNavS isOpen={open}>
            <header>
                <div className="p-pic" />
                <div className="p-detail">
                    <p>{retrieveCurUser()}</p>
                    <p className="location">
                        <span role="img" aria-label="watch">
                            ⚲
                        </span>
                        Lagos Nigeria
                    </p>
                </div>
            </header>

            <nav className="p-nav">
                <p onClick={() => direct('/start')}>
                    <svg
                        width="20.105px"
                        height="17.04px"
                        viewBox="0 17.25 20.105 17.04"
                    >
                        <rect x="0.103" y="17.25" fill="#DE202C" width="20.002" height="5.681" />
                        <polygon fill="#DE202C" points="18.726,34.29 0.103,34.29 0.103,28.61 17.441,28.61 " />
                    </svg>
                    START PRESENT
                </p>
                <p onClick={() => direct('/profile')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                        <title>ionicons-v5-j</title>
                        <path
                            d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM205.78,164.82C218.45,
                                151.39,236.28,144,256,144s37.39,7.44,50.11,20.94C319,178.62,325.27,197,323.79,216.76,320.83,256,290.43,288,256,
                                288s-64.89-32-67.79-71.25C186.74,196.83,193,178.39,205.78,164.82ZM256,432a175.49,175.49,0,0,1-126-53.22,122.91,
                                122.91,0,0,1,35.14-33.44C190.63,329,222.89,320,256,320s65.37,9,90.83,25.34A122.87,122.87,0,0,1,382,378.78,175.45,
                                175.45,0,0,1,256,432Z"
                        />
                    </svg>
                    MY ACCOUNT
                </p>
                <p onClick={() => direct('/store')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                        <title>ionicons-v5-d</title>
                        <circle cx="176" cy="416" r="32" />
                        <circle cx="400" cy="416" r="32" />
                        <path
                            d="M456.8,120.78A23.92,23.92,0,0,0,438.24,112H133.89l-6.13-34.78A16,16,0,0,0,112,
                                64H48a16,16,0,0,0,0,32H98.58l45.66,258.78A16,16,0,0,0,160,368H416a16,16,0,0,0,0-32H173.
                                42l-5.64-32H409.44A24.07,24.07,0,0,0,433,284.71l28.8-144A24,24,0,0,0,456.8,120.78Z"
                        />
                    </svg>
                    STORE
                </p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                        <title>ionicons-v5-j</title>
                        <path
                            d="M336,256c-20.56,0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62,5.77-47.26,21.14-63.76S312,
                                80,336,80c23.83,0,45.38,9.06,60.7,25.52,15.47,16.62,23,39.22,21.26,63.63h0c-1.67,23.11-10.9,44.77-26,61C376.44,
                                246.82,356.57,256,336,256Zm66-88h0Z"
                        />
                        <path
                            d="M467.83,432H204.18a27.71,27.71,0,0,1-22-10.67,30.22,30.22,0,0,1-5.26-25.79c8.42-33.81,29.28-61.85,60.32-81.08C264.79,
                                297.4,299.86,288,336,288c36.85,0,71,9,98.71,26.05,31.11,19.13,52,47.33,60.38,81.55a30.27,30.27,0,0,1-5.32,25.78A27.68,27.68,
                                0,0,1,467.83,432Z"
                        />
                        <path
                            d="M147,260c-35.19,0-66.13-32.72-69-72.93C76.58,166.47,83,147.42,96,133.45,108.86,119.62,127,112,147,112s38,7.66,50.93,21.57c13.
                                1,14.08,19.5,33.09,18,53.52C213.06,227.29,182.13,260,147,260Z"
                        />
                        <path
                            d="M212.66,291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46,0-58.07,7.68-80.57,21.62C40.93,316,23.77,339.05,16.84,366.88a27.39,27.
                                39,0,0,0,4.79,23.36A25.32,25.32,0,0,0,41.72,400h111a8,8,0,0,0,7.87-6.57c.11-.63.25-1.26.41-1.88,8.48-34.06,28.35-62.84,57.71-83.
                                82a8,8,0,0,0-.63-13.39C216.51,293.42,214.71,292.45,212.66,291.45Z"
                        />
                    </svg>
                    FRIENDS
                </p>
                <p onClick={() => direct('/todo')}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                        <title>ionicons-v5-k</title>
                        <path d="M428,224H288a48,48,0,0,1-48-48V36a4,4,0,0,0-4-4H144A64,64,0,0,0,80,96V416a64,64,0,0,0,64,64H368a64,
                        64,0,0,0,64-64V228A4,4,0,0,0,428,224ZM336,384H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Zm0-80H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Z"
                        />
                        <path d="M419.22,188.59,275.41,44.78A2,2,0,0,0,272,46.19V176a16,16,0,0,0,16,16H417.81A2,2,0,0,0,419.22,188.59Z" />
                    </svg>
                    TO DO
                </p>
                <p onClick={doLogout}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                        <title>ionicons-v5-o</title>
                        <path
                            d="M160,256a16,16,0,0,1,16-16H320V136c0-32-33.79-56-64-56H104a56.06,56.06,0,0,0-56,56V376a56.06,56.06,0,0,0,56,56H264a56.06,56.06,0,0,0,
                        56-56V272H176A16,16,0,0,1,160,256Z"
                        />
                        <path d="M459.31,244.69l-80-80a16,16,0,0,0-22.62,22.62L409.37,240H320v32h89.37l-52.68,52.69a16,16,0,1,0,22.62,22.62l80-80a16,16,0,0,0,0-22.62Z" />
                    </svg>
                    LOG OUT
                </p>
            </nav>
        </SideNavS>
    );
};

export default SideNav;
