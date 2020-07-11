import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { LayoutWrapper } from '../../../components/reusablestyles/GlobalStyle';
import speakerIcon from '../../../assets/speaker_icon.svg';
import clockIcon from '../../../assets/clock_icon.svg';
import accountIcon from '../../../assets/acc_icon.svg';
import nextIcon from '../../../assets/next.png';

const SplashWrapper = styled.div`
    background: ${({ bgLtColor, bgRtColor }) => `linear-gradient(120deg, ${bgRtColor}, ${bgLtColor})`};
    padding: 50px 0px 0px;
    max-width: 500px;
    width: 100%;
    min-height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        @media (max-width: 360px) {
            padding: 50px 0px 0px;
        }
        .top-div {
            width: 12em;
            height: 12em;
            border: ${({ bdColor }) => `8px solid ${bdColor}`};
            border-radius: 50%;
            img {
                width: 100%;
            }
        }
        h2 {
            text-transform: uppercase;
        }
        p {
            width: 80%;
            text-align: center;
            line-height: 1.4em;
        }
        .controls-div {
            margin: 5% 0 10%;
            display: flex;
                div {
                    width: 15px;
                    height: 15px;
                    border: 1px solid white;
                    border-radius: 50%;
                    &:nth-of-type(2) {
                        margin: 0 10px;
                    }
                    &:focus {
                        outline: none;
                    }
                }
                .med-ctrl {
                    background: ${({ isActive }) => (isActive === 0 ? 'white' : null)};
                    cursor: pointer;
                }
                .prod-ctrl {
                    background: ${({ isActive }) => (isActive === 1 ? 'white' : null)};
                    cursor: pointer;
                }
                .acc-ctrl {
                    background: ${({ isActive }) => (isActive === 2 ? 'white' : null)};
                    cursor: pointer;
                }
        }
        .next-div {
            width: 70px;
            cursor: pointer;
            transition: all .3s;
                img {
                    width: 100%;
                }
                &:focus {
                    outline: none;
                }
                &:hover {
                    transform: scale(1.06);
                }
        }
`;

const Splash = () => {
    const [splashDetails] = useState([
        {
            bgLtColor: '#2D4B97',
            // bgLtColor: '#fff',
            bgRtColor: '#1E49B2',
            topDivBorderCol: '#A9C1FC',
            topDivIcon: speakerIcon,
            topDivIconAlt: 'loud',
            heading: 'meditation',
            para: 'Feeling anxious or stress? take a step back and just breathe with our unguided meditation.',
        },
        {
            bgLtColor: '#C750AB',
            bgRtColor: '#EE70D0',
            topDivBorderCol: '#EE70D0',
            topDivIcon: clockIcon,
            topDivIconAlt: 'productivity',
            heading: 'productivity',
            para: 'Unable to deliver on the tasks you set out for the day? Say goodbye to unproductive days with our to do list.',
        },
        {
            bgLtColor: '#E01E27',
            bgRtColor: '#E93941',
            topDivBorderCol: '#FFACB0',
            topDivIcon: accountIcon,
            topDivIconAlt: 'accountability',
            heading: 'accountability',
            para: 'Can’t seem to leave your phone and concentrate while working? Now a thing of the past with Our lockdown option.',
        },
    ]);
    let [current, setCurrent] = useState(0);
    const history = useHistory();

    const doNext = e => {
        if (((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) && current !== 2) setCurrent(current += 1);
        else if (current === 2) history.push('/home');
    };

    const forceNext = (e, currentInd) => {
        if ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) setCurrent(currentInd);
    };

    return (
        <LayoutWrapper>
            <SplashWrapper
                bgLtColor={splashDetails[current].bgLtColor}
                bgRtColor={splashDetails[current].bgRtColor}
                bdColor={splashDetails[current].topDivBorderCol}
                isActive={current}
            >
                <div className="top-div">
                    <img src={splashDetails[current].topDivIcon} alt={splashDetails[current].topDivIconAlt} />
                </div>
                <h2>{splashDetails[current].heading}</h2>
                <p>{splashDetails[current].para}</p>
                <div className="controls-div">
                    <div
                        className="med-ctrl"
                        onClick={e => forceNext(e, 0)}
                        onKeyPress={e => forceNext(e, 0)}
                        role="button"
                        tabIndex="0"
                        aria-label="med-ctrl"
                    />

                    <div
                        className="prod-ctrl"
                        onClick={e => forceNext(e, 1)}
                        onKeyPress={e => forceNext(e, 1)}
                        role="button"
                        tabIndex="0"
                        aria-label="prod-ctrl"
                    />

                    <div
                        className="acc-ctrl"
                        onClick={e => forceNext(e, 2)}
                        onKeyPress={e => forceNext(e, 2)}
                        role="button"
                        tabIndex="0"
                        aria-label="acc-ctrl"
                    />
                </div>
                <div className="next-div" onClick={doNext} onKeyPress={doNext} role="button" tabIndex="0">
                    <img src={nextIcon} alt="next" />
                </div>
            </SplashWrapper>
        </LayoutWrapper>
    );
};

export default Splash;
