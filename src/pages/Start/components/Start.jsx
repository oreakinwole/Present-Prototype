import React, { useState } from 'react';
import Header from '../../../components/Header';
import {
    LayoutWrapper, WidthWrapperCenter
} from '../../../components/reusablestyles/GlobalStyle';
import {
    StartCircle,
    RangeBar,
    PointsIndictor
} from './style';

import SideNav from '../../../components/SideNav';

const Start = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSbOnKeypress = e => ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) && setSidebarOpen(!sidebarOpen);

    return (
        <LayoutWrapper>
            <SideNav open={sidebarOpen} />
            <Header toggleSB={toggleSbOnKeypress} />
            <WidthWrapperCenter onClick={() => setSidebarOpen(false)}>
                <StartCircle><p>Click Here to Start</p></StartCircle>
                <RangeBar />
                <PointsIndictor>0 Points</PointsIndictor>
            </WidthWrapperCenter>
        </LayoutWrapper>
    );
};

export default Start;
