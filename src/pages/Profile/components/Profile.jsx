import React from 'react';
import Header from '../../../components/Header';
import {
    LayoutWrapper, WidthWrapperCenter
} from '../../../components/reusablestyles/GlobalStyle';

import SideNav from '../../../components/SideNav';

const Profile = () => (
    <LayoutWrapper>
        <WidthWrapperCenter>
            <SideNav />
            <Header />
        </WidthWrapperCenter>
    </LayoutWrapper>
);

export default Profile;
