import React from 'react';
import { Link } from 'react-router-dom';
import presentLogo from '../../../assets/present_logo.png';
import { LayoutWrapper } from '../../../components/reusablestyles/GlobalStyle';
import {
    LogoDiv, CaptionPara, WidthWrapperCenterHome
} from './style';

const Home = () => (
    <LayoutWrapper>
        <WidthWrapperCenterHome>
            <LogoDiv>
                <img src={presentLogo} alt="logo" />
            </LogoDiv>
            <CaptionPara>
                By choosing this app
                you have made every simple things easy in life smarter.
            </CaptionPara>

            <Link to="/login" className="login-links">
                <p> Sign In </p>
            </Link>

            <Link to="/home" className="login-links">
                <p> Continue with Facebook </p>
            </Link>

            <Link to="/home" className="login-links">
                <p> Continue with Google </p>
            </Link>

            <p>
                or &nbsp;
                <Link style={{ color: '#fd5554' }} to="/register">Click here to Sign Up</Link>
            </p>
            <p style={{ fontSize: '12px' }}>
                By Signing up, you agree to our
                <strong style={{ color: '#6c6c6c' }}> Terms of Use and Privacy Policy</strong>
            </p>
        </WidthWrapperCenterHome>
    </LayoutWrapper>
);

export default Home;
