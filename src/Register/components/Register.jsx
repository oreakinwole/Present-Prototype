import React from 'react';
import menuIcon from '../../assets/hamburger-white.svg';
import dotsIcon from '../../assets/3dots.png';

import {
    LayoutWrapper, RegForm, RegScreenWrapper, Header, RegSubmitBtn
} from './style';

const Register = () => (
    <LayoutWrapper>
        <RegScreenWrapper>
            <Header>
                <div><img src={menuIcon} alt="menu" /></div>
                <h2> Create Profile</h2>
                <div><img src={dotsIcon} alt="menu" /></div>
            </Header>
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

        </RegScreenWrapper>
    </LayoutWrapper>
);

export default Register;
