import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import {
    LayoutWrapper, WidthWrapper
} from '../../../components/reusablestyles/GlobalStyle';
import SideNav from '../../../components/SideNav';
import bukkaHut from '../../../assets/Bh_logo.png';
import kfcPack from '../../../assets/food1.png';
import sCinema from '../../../assets/s_cinemas.jpg';
import gCinema from '../../../assets/g_cinemas.png';

const Row = styled.section`
    display: flex;
    justify-content: space-between;
        .fd-col{
            display: flex;
            flex-direction: column;
            .pic-div{
                    width: 90%;
                    height: 150px;
                    border-radius: 30px;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column-reverse;
                    overflow: hidden;
                    div{
                        opacity: 0;
                        background: #00c0f4;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding-top: 8px
                        font-size: 1.1em;
                        font-weight bold;
                        transition: all .4s ease-in-out;
                        &:hover{
                            opacity: 1;
                        }
                    }
                }
            .bukka {background: #fff url(${bukkaHut}) no-repeat center; background-size: cover;}
            .jumia {background: #fff url(${kfcPack}) no-repeat center; background-size: cover;}
            .scin {background: #fff url(${sCinema}) no-repeat center; background-size: cover;}
            .gcin {background: #fff url(${gCinema}) no-repeat center; background-size: cover;}
                h3{
                    width: 80%;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
                p{
                    margin-top: 0;
                }
        }
`;
const Store = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSbOnKeypress = e => ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) && setSidebarOpen(!sidebarOpen);
    return (
        <LayoutWrapper>
            <SideNav open={sidebarOpen} />
            <Header toggleSB={toggleSbOnKeypress} title="You have 10 points" />
            <WidthWrapper onClick={() => setSidebarOpen(false)}>
                <h3>Food & Drinks</h3>
                <Row>
                    <div className="fd-col">
                        <div className="pic-div bukka">
                            <div><p>10 / 100 points</p></div>
                        </div>
                        <h3>Free Drink with every Meal</h3>
                        <p>Bukka Hut</p>
                    </div>
                    <div className="fd-col">
                        <div className="pic-div jumia">
                            <div><p>10 / 100 points</p></div>
                        </div>
                        <h3>Free Cocacola with every Meal</h3>
                        <p>Jumia Food</p>
                    </div>
                </Row>

                <h3>Movie Tickets</h3>
                <Row>
                    <div className="fd-col">
                        <div className="pic-div scin">
                            <div><p>10 / 100 points</p></div>
                        </div>
                        <h3>Free Drink with every Meal</h3>
                        <p>Silverbird Cinemas</p>
                    </div>
                    <div className="fd-col">
                        <div className="pic-div gcin">
                            <div><p>10 / 100 points</p></div>
                        </div>
                        <h3>Free Drink with every Meal</h3>
                        <p>Genesis Cinemas</p>
                    </div>
                </Row>
            </WidthWrapper>
        </LayoutWrapper>
    );
};

export default Store;
