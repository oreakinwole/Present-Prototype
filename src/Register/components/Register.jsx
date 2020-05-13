import React from 'react';

import Header from '../../components/Header';
import { LayoutWrapper, WidthWrapper } from '../../components/reusablestyles/GlobalStyle';
import {
    RegForm, RegSubmitBtn
} from '../../components/reusablestyles/RegFormStyle';

const Register = () => (
    <LayoutWrapper>
        <WidthWrapper>
            <Header title="Create Profile" />
            <RegForm>
                <label>
                    First name
                    <input type="text" required />
                </label>
                <label>
                    Last name
                    <input type="text" required />
                </label>
                <label>
                    E-mail
                    <input type="email" required />
                </label>
                <label>
                    Password
                    <input type="password" required />
                </label>
                <label>
                    Confirm password
                    <input type="password" required />
                </label>

                <RegSubmitBtn type="submit">Continue</RegSubmitBtn>
            </RegForm>

        </WidthWrapper>
    </LayoutWrapper>
);

export default Register;
