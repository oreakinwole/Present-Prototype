import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import {
    LayoutWrapper, WidthWrapper
} from '../../../components/reusablestyles/GlobalStyle';
import SideNav from '../../../components/SideNav';

const Heading = styled.h2`
    text-align: center;
`;

const TodoBody = styled.section`
    background: #1D3571;
    padding-top: 1px;
        ol{
            li{
                font-size: 1.2em;
                font-weight: bolder;
                width: 250px;
                background: #26448D;
                margin-bottom: 10px;
                padding: 4px 0;
                padding-left: 5px;
            }
        }
        section{
            margin-top: 30px;
            text-align: center;
            input{
                outline: none;
                color: white;
                width: 60%;
                font-size: 1.5em;
                background: #26448D;
                border: 1px solid #fff;
            }
            button{
                color: white;
                font-size: 1.5em;
                font-weight: bold;
                margin-left: 20px;
                background: #26448D;
                outline: none;
                border: none;
                width: 40px;
                cursor: pointer;
            }
        }
`;
const TodoCreate = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSbOnKeypress = e => ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) && setSidebarOpen(!sidebarOpen);

    return (
        <LayoutWrapper>
            <SideNav open={sidebarOpen} />
            <Header toggleSB={toggleSbOnKeypress} title="To Do" />

            <WidthWrapper onClick={() => setSidebarOpen(false)}>
                <Heading>Cooking Recipe</Heading>
                <TodoBody>
                    <ol>
                        <li>Cook Indomie</li>
                        <li>Cook Indomie</li>
                        <li>Cook Indomie</li>
                        <li>Cook Indomie</li>
                    </ol>
                    <section>
                        <form>
                            <label>
                                <input type="text" />
                            </label>
                            <button type="submit">+</button>
                        </form>
                    </section>
                </TodoBody>

            </WidthWrapper>

        </LayoutWrapper>
    );
};

export default TodoCreate;
