import React from 'react';

import Header from '../../components/Header';
import { LayoutWrapper, WidthWrapper } from '../../components/reusablestyles/GlobalStyle';
import {
    RegForm, RegSubmitBtn
} from '../../components/reusablestyles/RegFormStyle';

const Login = () => (
    <LayoutWrapper>
        <WidthWrapper>
            <Header title="Log In" />
            <RegForm>
                <label>
                    E-mail
                    <input type="email" required />
                </label>
                <label>
                    Password
                    <input type="password" required />
                </label>
                <RegSubmitBtn type="submit">Continue</RegSubmitBtn>
            </RegForm>

        </WidthWrapper>
    </LayoutWrapper>
);

export default Login;
