import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../../components/Header';
import { LayoutWrapper, WidthWrapper } from '../../../components/reusablestyles/GlobalStyle';
import {
    RegForm, RegSubmitBtn
} from '../../../components/reusablestyles/RegFormStyle';
import { usersData, storeCurUser, getCurUserName } from '../../../utility';

const Login = () => {
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const [isLogginIn, setIsLogginIn] = useState(false);
    const history = useHistory();

    const onLoginFormSubmit = e => {
        e.preventDefault();
        setIsLogginIn(true);
        setTimeout(() => {
            const email = usersData.find(val => val.email === emailInput.current.value);
            const pWord = usersData.find(val => val.password === passwordInput.current.value);
            if (!email) {
                toast.error('User does not exist');
                emailInput.current.focus();
                setIsLogginIn(false);
            } else if (!pWord) {
                toast.error('Incorrect username or password');
                emailInput.current.focus();
                setIsLogginIn(false);
            } else {
                const { firstname, lastname } = getCurUserName(emailInput.current.value);
                storeCurUser(`${firstname} ${lastname}`);
                setIsLogginIn(false);
                history.push('/profile');
            }
        }, 2000);
    };

    return (
        <LayoutWrapper>
            <Header title="Log In" />
            <WidthWrapper>
                <RegForm onSubmit={onLoginFormSubmit}>
                    <label>
                        E-mail
                        <input ref={emailInput} type="email" maxLength="50" autoComplete="on" required />
                    </label>
                    <label>
                        Password
                        <input ref={passwordInput} type="password" maxLength="50" required />
                    </label>
                    <RegSubmitBtn type="submit" isLogginIn={isLogginIn}>
                        {isLogginIn ? 'Logging in...' : 'Log in'}
                    </RegSubmitBtn>
                    <p>
                        <Link style={{ color: '#fff', marginLeft: '30%' }} to="/register">Click here to Sign Up</Link>
                    </p>
                    <p>
                        <Link style={{ color: '#fff', marginLeft: '35%', fontSize: '14px' }} to="/login">Forgot Password?</Link>
                    </p>
                </RegForm>

            </WidthWrapper>
        </LayoutWrapper>
    );
};

export default Login;
