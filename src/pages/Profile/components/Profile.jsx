import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import {
    LayoutWrapper, WidthWrapper
} from '../../../components/reusablestyles/GlobalStyle';

import SideNav from '../../../components/SideNav';

const DetailsHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
        div:first-child {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: grey;
        }
        div:last-child {
            width: 60%;
                p{
                    text-align: right;
                }
        }
        .progress{
            width: 100%;
            height: 7px;
            background: #00c0f4;
            border-radius: 8px;
        }
`;

const PointsRow = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
        .points-col{
            div{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 2em;
            }
            .p-e{
                border: 2px solid #3cbcd9;
                color: #3cbcd9;
            }
            .p-s{
                border: 2px solid #5fad47;
                color: #5fad47;
            }
            .b-p{
                border: 2px solid #da7531;
                color: #da7531;
            }

        }

`;

const TimeSpentRow = styled.section`
    display: flex;
    flex-direction: column;
    // background: black;
        .ts-item{
            margin-top: -20px;
            display: flex;
            flex-direction column;
            justify-content: space-between;
            align-items: space-between;
            width: 100%;
                .details{
                    margin-top: -20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    div{
                        width: 90%;
                        height: 2px;
                        border-radius: 2px;
                        background: white;
                    }
                }
        }

`;

const Profile = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSbOnKeypress = e => ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) && setSidebarOpen(!sidebarOpen);
    return (
        <LayoutWrapper>
            <SideNav open={sidebarOpen} />
            <Header toggleSB={toggleSbOnKeypress} title="Profile" />
            <WidthWrapper onClick={() => setSidebarOpen(false)}>
                <DetailsHeader>
                    <div />
                    <div>
                        <h3>Adekunle Silver</h3>
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
