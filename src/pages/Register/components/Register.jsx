import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';

import Header from '../../../components/Header';
import { LayoutWrapper, WidthWrapper } from '../../../components/reusablestyles/GlobalStyle';
import {
    RegForm, RegSubmitBtn
} from '../../../components/reusablestyles/RegFormStyle';
import { usersData } from '../../../utility';

const Register = () => {
    const [siginingIn, setSiginingIn] = useState(false);
    const firstNameInput = useRef(null);
    const lastNameInput = useRef(null);
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const cPasswordInput = useRef(null);

    const doSignIn = e => {
        e.preventDefault();
        setSiginingIn(true);
        setTimeout(() => {
            if (passwordInput.current.value !== cPasswordInput.current.value) {
                toast.error('passwords do not match');
                passwordInput.current.focus();
                setSiginingIn(false);
            } else {
                usersData.push({
                    firstname: firstNameInput.current.value,
                    lastname: lastNameInput.current.value,
                    email: emailInput.current.value,
                    password: passwordInput.current.value,
                });
                setSiginingIn(false);
                toast.success(`Registration Successful ${firstNameInput.current.value}`);
            }
        }, 2000);
    };
    return (
        <LayoutWrapper>
            <WidthWrapper>
                <Header title="Create Profile" />
                <RegForm onSubmit={doSignIn}>
                    <label>
                        First name
                        <input ref={firstNameInput} type="text" maxLength="50" required />
                    </label>
                    <label>
                        Last name
                        <input ref={lastNameInput} type="text" maxLength="50" required />
                    </label>
                    <label>
                        E-mail
                        <input ref={emailInput} type="email" maxLength="50" required />
                    </label>
                    <label>
                        Password
                        <input ref={passwordInput} type="password" maxLength="50" required />
                    </label>
                    <label>
                        Confirm password
                        <input ref={cPasswordInput} type="password" maxLength="50" required />
                    </label>

                    <RegSubmitBtn type="submit" siginingIn={siginingIn}>
                        {siginingIn ? 'Signing in...' : 'Sign in'}
                    </RegSubmitBtn>
                </RegForm>

            </WidthWrapper>
        </LayoutWrapper>
    );
};

export default Register;
