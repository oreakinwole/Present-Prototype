import React, { useState } from 'react';
import Header from '../../../components/Header';
import {
    LayoutWrapper, WidthWrapper
} from '../../../components/reusablestyles/GlobalStyle';

import SideNav from '../../../components/SideNav';
import { retrieveCurUser } from '../../../utility';
import {
    DetailsHeader,
    PointsRow,
    TimeSpentRow
} from './style';

const Profile = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSbOnKeypress = e => ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) && setSidebarOpen(!sidebarOpen);
    return (
        <LayoutWrapper>
            <SideNav open={sidebarOpen} />
            <Header toggleSB={toggleSbOnKeypress} title="My Account" />
            <WidthWrapper onClick={() => setSidebarOpen(false)}>
                <DetailsHeader>
                    <div />
                    <div>
                        <h3>{retrieveCurUser()}</h3>
                        <div className="progress" />
                        <p>Edit Profile</p>
                    </div>
                </DetailsHeader>
                <h4>Daily Stats</h4>

                <PointsRow>
                    <div className="points-col">
                        <p> Points Earned </p>
                        <div className="p-e">
                            <h4>10</h4>
                        </div>
                    </div>
                    <div className="points-col">
                        <p> Points Spent </p>
                        <div className="p-s">
                            <h4>10</h4>
                        </div>
                    </div>
                    <div className="points-col">
                        <p> Best Present </p>
                        <div className="b-p">
                            <h4>10</h4>
                        </div>
                    </div>
                </PointsRow>
                <h4>Last time spent in Present</h4>

                <TimeSpentRow>
                    <div className="ts-item">
                        <h4>29. 4. November</h4>
                        <div className="details">
                            <div />
                            <p>60m</p>
                        </div>
                    </div>

                    <div className="ts-item">
                        <h4>&nbsp;</h4>
                        <div className="details">
                            <div />
                            <p>45m</p>
                        </div>
                    </div>

                    <div className="ts-item">
                        <h4>&nbsp;</h4>
                        <div className="details">
                            <div />
                            <p>30m</p>
                        </div>
                    </div>
                </TimeSpentRow>
            </WidthWrapper>
        </LayoutWrapper>
    );
};

export default Profile;
