import React from 'react';
import Header from '../../components/Header';
import {
    LayoutWrapper, WidthWrapperCenter
} from '../../components/reusablestyles/GlobalStyle';
import {
    StartCircle,
    RangeBar,
    PointsIndictor
} from './style';

import SideNav from '../../components/SideNav';

const Start = () => (
    <LayoutWrapper>
        <WidthWrapperCenter>
            <SideNav />
            <Header />
            <StartCircle><p>Click Here to Start</p></StartCircle>
            <RangeBar />
            <PointsIndictor>0 Points</PointsIndictor>
        </WidthWrapperCenter>
    </LayoutWrapper>
);

export default Start;
