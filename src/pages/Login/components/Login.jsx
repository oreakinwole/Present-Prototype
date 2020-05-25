import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../../../components/Header';
import { LayoutWrapper, WidthWrapper } from '../../../components/reusablestyles/GlobalStyle';
import {
    RegForm, RegSubmitBtn
} from '../../../components/reusablestyles/RegFormStyle';
import { usersData } from '../../../utility';

const Login = () => {
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const [isLogginIn, setIsLogginIn] = useState(false);

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
                toast.success('Welcome');
                setIsLogginIn(false);
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
                        <input ref={emailInput} type="email" maxLength="50" required />
                    </label>
                    <label>
                        Password
                        <input ref={passwordInput} type="password" maxLength="50" required />
                    </label>
                    <RegSubmitBtn type="submit" isLogginIn={isLogginIn}>
                        {isLogginIn ? 'Logging in...' : 'Log in'}
                    </RegSubmitBtn>
                </RegForm>

            </WidthWrapper>
        </LayoutWrapper>
    );
};

export default Login;
