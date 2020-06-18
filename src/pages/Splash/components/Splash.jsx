import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { LayoutWrapper } from '../../../components/reusablestyles/GlobalStyle';
import speakerIcon from '../../../assets/speaker_icon.svg';
import clockIcon from '../../../assets/clock_icon.svg';
import accountIcon from '../../../assets/acc_icon.svg';
import nextIcon from '../../../assets/next.png';

const SplashWrapper = styled.div`
    background: ${({ bgColor }) => bgColor};
    padding: 50px 0px 0px;
    max-width: 500px;
    width: 100%;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
        @media (max-width: 360px) {
            padding: 50px 0px 0px;
        }
        .top-div {
            width: 200px;
            height: 200px;
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
            margin: 60px 0;
            cursor: pointer;
            display: flex;
                div {
                    width: 15px;
                    height: 15px;
                    border: 1px solid white;
                    border-radius: 50%;
                    &:nth-of-type(2) {
                        margin: 0 10px;
                    }
                }
                .med-ctrl {
                    background: ${({ isActive }) => (isActive === 0 ? 'white' : null)};
                }
                .prod-ctrl {
                    background: ${({ isActive }) => (isActive === 1 ? 'white' : null)};
                }
                .acc-ctrl {
                    background: ${({ isActive }) => (isActive === 2 ? 'white' : null)};
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

const Splash = () => {
    const [splashDetails] = useState([
        {
            bgCol: '#2D4B97',
            topDivBorderCol: '#A9C1FC',
            topDivIcon: speakerIcon,
            topDivIconAlt: 'loud',
            heading: 'meditation',
            para: `Feeling anxious or stress? thoughts seemingly overwhelming you, take a step back and just breathe.
            From the sounds of the beach, you long for or the gentle breeze of the wind as it caresses the oceans.
            The present experience offers you the opportunity to meditate to soothing sounds in the background,
            transforming your environment to one of peace and tranquillity.`,
        },
        {
            bgCol: '#C750AB',
            topDivBorderCol: '#EE70D0',
            topDivIcon: clockIcon,
            topDivIconAlt: 'productivity',
            heading: 'productivity',
            para: `Unable to deliver on the tasks you set out for the day? Always seem to forget to deliver on the important
            tasks but doing the less important one? Our to-do list solves all of this by allowing to create a hierarchy for your
            tasks, your to-do today, your to-do tomorrow etc. The present experience offers you the opportunity to improve your
            productivity thereby affording you more time to do what is most important to you.`,
        },
        {
            bgCol: '#E01E27',
            topDivBorderCol: '#FFACB0',
            topDivIcon: accountIcon,
            topDivIconAlt: 'accountability',
            heading: 'accountability',
            para: `Constantly distracted by social media? Can’t seem to leave your phone and concentrate while working or studying?
            Our lockdown option allows you to lock your phone from the internet for a period of time (20 mins to 2 hours) allowing
            you to concentrate on work and reduce distraction from social media or the internet. The present experience offers you
            the opportunity to improve your efficiency and quality of work by keeping away distractions, giving you the platform to
            deliver the consistently high level of quality that you are capable of delivering.`,
        },
    ]);
    let [current, setCurrent] = useState(0);
    const history = useHistory();

    const doNext = e => {
        if (((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) && current !== 2) setCurrent(current += 1);
        else if (current === 2) history.push('/home');
    };

    return (
        <LayoutWrapper>
            <SplashWrapper bgColor={splashDetails[current].bgCol} bdColor={splashDetails[current].topDivBorderCol} isActive={current}>
                <div className="top-div">
                    <img src={splashDetails[current].topDivIcon} alt={splashDetails[current].topDivIconAlt} />
                </div>
                <h2>{splashDetails[current].heading}</h2>
                <p>{splashDetails[current].para}</p>
                <div className="controls-div">
                    <div className="med-ctrl" />
                    <div className="prod-ctrl" />
                    <div className="acc-ctrl" />
                </div>
                <div className="next-div" onClick={doNext} onKeyPress={doNext} role="button" tabIndex={0}>
                    <img src={nextIcon} alt="next" />
                </div>
            </SplashWrapper>
        </LayoutWrapper>
    );
};

export default Splash;
