import React from 'react';
import styled from 'styled-components';
import presentLogo from '../../assets/present_logo.png';
import {
    LayoutWrapper, WidthWrapperCenter
} from '../../components/reusablestyles/GlobalStyle';

const LogoDiv = styled.div`
    text-align: center;
    img{
        max-width: 200px;
        height: auto;
    }
`;
const ButtonBP = styled.button`
    border: none;
    cursor: pointer;
    width: 70%;
    height: 60px;
    background-color: ${({ btnBgColor }) => btnBgColor};
    color: ${({ textColor }) => textColor};
    border-radius: 30px;
    font-size: 1.3em;
        &:nth-of-type(2){
            margin-top: 20px;
        }
        &:focus{
            outline:none;
        }
`;

const CaptionPara = styled.p`
    text-align: center;
    width: 70%;
    color: #6c6c6c;
`;

const Home = () => (
    <LayoutWrapper>
        <WidthWrapperCenter>
            <LogoDiv>
                <img src={presentLogo} alt="logo" />
            </LogoDiv>
            <CaptionPara>
                By choosing this app
                you have made every simple things easy in life smarter.
            </CaptionPara>
            <ButtonBP btnBgColor="#263a79" textColor="white">Continue with Facebook</ButtonBP>
            <ButtonBP btnBgColor="#d2d2d2" textColor="#6c6c6c">Continue with Google</ButtonBP>
            <p>
                or &nbsp;
                <a style={{ color: '#fd5554' }} href="/">Click here to Sign Up</a>
            </p>
            <p style={{ fontSize: '12px' }}>
                By Signing up, you agree to our
                <strong style={{ color: '#6c6c6c' }}> Terms of Use and Privacy Policy</strong>
            </p>
        </WidthWrapperCenter>
    </LayoutWrapper>
);

export default Home;
