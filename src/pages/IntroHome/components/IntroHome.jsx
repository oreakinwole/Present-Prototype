import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LayoutWrapper } from '../../../components/reusablestyles/GlobalStyle';
import presentLogo from '../../../assets/present_logo.png';
import guyImage from '../../../assets/guy_illust.png';

const WidthWrapperNoBg = styled.div`
    padding: 50px 0px 0px;
    max-width: 500px;
    width: 100%;
    height: 100vh;
    color: white;
    @media (max-width: 360px) {
        padding: 50px 0px 0px;
    }
        .body-divs{
            display: flex;
            position: absolute;
            bottom: 0;
            width: 500px;
            overflow: hidden;
                div:nth-of-type(1) {
                    width: 40%;
                    a {
                        position: absolute;
                        bottom: 40px;
                        left: 50px;
                        border: none;
                        cursor: pointer;
                        text-decoration: none;
                        background-color: #6A52B8;
                        border-radius: 30px;
                        color: white;
                        padding: 10px 30px;
                        font-weight: bolder;
                        &:focus{
                            outline:none;
                        }

                    }
                }
                div:nth-of-type(2) {
                    width: 60%;
                        img {
                            margin-left: 15px;
                            margin-bottom: -5px;
                        }
                }
        }
`;

const LogoDiv = styled.div`
    text-align: center;
    img{
        max-width: 200px;
        height: auto;
    }
`;

const CaptionPara = styled.p`
    text-align: center;
    width: 70%;
    color: #6c6c6c;
    margin: 30px auto 0px;
    font-weight: bold;
    color: #26448D;
        span {
            color: #E01E27;
        }
`;

const IntroHome = () => (
    <LayoutWrapper>
        <WidthWrapperNoBg>
            <LogoDiv>
                <img src={presentLogo} alt="logo" />
            </LogoDiv>
            <CaptionPara>
                The Present App rewards you with
                {' '}
                <span>points</span>
                {' '}
                as you participate and successfully navigate through the present experience.
            </CaptionPara>
            <div className="body-divs">
                <div>
                    <Link to="/splash">
                        Enter
                    </Link>
                </div>
                <div>
                    <img src={guyImage} alt="man with phone" />
                </div>

            </div>
        </WidthWrapperNoBg>
    </LayoutWrapper>
);

export default IntroHome;
