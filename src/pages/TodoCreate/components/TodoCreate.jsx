import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Header from '../../../components/Header';
import {
    LayoutWrapper, WidthWrapper
} from '../../../components/reusablestyles/GlobalStyle';
import SideNav from '../../../components/SideNav';
// import { todoData } from '../../../utility';

const Heading = styled.div`
    text-align: center;
    margin: 20px 0;
    font-size: 25px;
    font-weight: bold;
    input{
        text-transform: uppercase;
        background: transparent;
        border: none;
        outline: none;
        color: white;
        &::placeholder{
            color: white;
        }
    }
`;

const TodoBody = styled.section`
    background: #1D3571;
    padding-top: 1px;
        ol{
            li{

                font-size: 1.2em;
                font-weight: bolder;
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
const TodoCreate = ({ location }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSbOnKeypress = e => ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) && setSidebarOpen(!sidebarOpen);
    const [newTodo, setNewTodo] = useState({
        title: '',
        details: [],
    });
    const [isTitleSet, setIsTitleSet] = useState(false);
    const titleInput = useRef(null);
    const newItem = useRef(null);

    const setTitle = e => {
        if (e.which === 13) {
            setNewTodo({
                ...newTodo,
                title: titleInput.current.value,
            });
            setIsTitleSet(true);
            toast.info('Title Saved');
        }
    };

    const addNewItem = e => {
        e.preventDefault();
        if (newItem.current.value !== '') {
            setNewTodo({
                ...newTodo,
                details: [
                    ...newTodo.details,
                    newItem.current.value,
                ],
            });
            newItem.current.value = '';
        }
    };

    /* For When state is passed to this component, i.e user clicks any of the todo items on the /Todo route OR page */
    useEffect(() => {
        if (location.state) {
            setNewTodo({
                title: location.state.title,
                details: location.state.details,
            });
        }
        if (newTodo.title) setIsTitleSet(true);
        else setIsTitleSet(false);
    }, [location, newTodo.title]);

    return (
        <LayoutWrapper>
            <SideNav open={sidebarOpen} />
            <Header toggleSB={toggleSbOnKeypress} title="To Do" />

            <WidthWrapper onClick={() => setSidebarOpen(false)}>
                <Heading>
                    {!isTitleSet && (<input type="text" maxLength="30" placeholder="Click to add Title" ref={titleInput} onKeyPress={setTitle} />)}
                    {isTitleSet && (<input type="text" maxLength="30" placeholder={newTodo.title} readOnly />)}
                </Heading>
                <TodoBody>
                    <ol>
                        {newTodo.details.map((val, i) => (
                            <li key={`${i + val}`}>{val}</li>
                        ))}
                    </ol>
                    <section>
                        <form onSubmit={addNewItem}>
                            <label>
                                <input type="text" ref={newItem} />
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
