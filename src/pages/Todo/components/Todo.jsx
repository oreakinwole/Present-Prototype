import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import {
    LayoutWrapper, WidthWrapper
} from '../../../components/reusablestyles/GlobalStyle';
import SideNav from '../../../components/SideNav';

const AddIconDiv = styled.div`
    margin: 20px 0 40px;
    text-align: right;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
        transition: .2s ease-in-out;
    }

`;

const TodoListDiv = styled.section`
    font-size: 1.2em;
    font-weight: bold;
        div{
            margin 0 auto 20px;
            text-align: center;
            width: 380px;
            background: #A8C2FF;
            border-radius: 20px;
            padding: 1px 10px;
            cursor: pointer;
        }
`;

const Todo = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSbOnKeypress = e => ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) && setSidebarOpen(!sidebarOpen);

    return (
        <LayoutWrapper>
            <SideNav open={sidebarOpen} />
            <Header toggleSB={toggleSbOnKeypress} title="To Do" />

            <WidthWrapper onClick={() => setSidebarOpen(false)}>
                <AddIconDiv>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="44" viewBox="0 0 43 44">
                        <g id="Group_13" data-name="Group 13" transform="translate(-313 -49)">
                            <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(313 49)" fill="none" stroke="#fff" strokeWidth="5">
                                <ellipse cx="21.5" cy="22" rx="21.5" ry="22" stroke="none" />
                                <ellipse cx="21.5" cy="22" rx="19" ry="19.5" fill="none" />
                            </g>
                            <g id="Group_1" data-name="Group 1" transform="translate(322.02 58.52)">
                                <path id="Path_1" data-name="Path 1" d="M465,181v24.3" transform="translate(-452.848 -181)" fill="none" stroke="#fff" strokeWidth="5" />
                                <path id="Path_2" data-name="Path 2" d="M0,0V24.3" transform="translate(24.304 12.152) rotate(90)" fill="none" stroke="#fff" strokeWidth="5" />
                            </g>
                        </g>
                    </svg>

                </AddIconDiv>

                <TodoListDiv>
                    <div>
                        <p>Cooking Recipe</p>
                    </div>
                    <div>
                        <p>Cooking Recipe</p>
                    </div>
                    <div>
                        <p>Cooking Recipe</p>
                    </div>
                </TodoListDiv>
            </WidthWrapper>

        </LayoutWrapper>
    );
};

export default Todo;
