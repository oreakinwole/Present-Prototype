/* eslint-disable no-console */
import React, { useState } from 'react';
import styled from 'styled-components';
import randomstring from 'randomstring';
import Header from '../../../components/Header';
import {
    LayoutWrapper, WidthWrapperNoH
} from '../../../components/reusablestyles/GlobalStyle';
import SideNav from '../../../components/SideNav';
import { todoData } from '../../../utility';
import rightIcon from '../../../assets/right_gt.svg';
import cancelIcon from '../../../assets/cancel.svg';
import downArrow from '../../../assets/arrow-down.svg';
import check from '../../../assets/check.svg';
import add from '../../../assets/add.svg';

const TodoListDiv = styled.section`
margin-top: 40px;
font-size: 1.2em;
font-weight: bold;
    .td-item {
        display: flex;
        margin-bottom: 50px;
            .arrow-div {
                padding-top: 10px;
                width: 12px;
                height: 40px;
                outline: none;
                cursor: pointer;
                    img {
                        width: 100%;
                    }
            }

            header {
                margin: 0 auto;
                width: 90%;
                color: #3C404B;
                background: white;
                border-radius: 10px;
                padding: 10px 0px 10px 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .caption {
                    display: flex;
                    align-items: center;
                    p{
                        margin: 0;
                        margin-right: 10px;
                        max-width: 50px;
                        color: white;
                        background: #263a79;
                        border-radius: 10px;
                        padding: 5px 6px;
                    }
                    h3{
                        margin: 0;
                    }
                }
                    .item-info .element {
                        border-bottom: 1px solid #DCDBDB;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                            .parag {
                                display: flex;
                                align-items: center;
                                p {
                                    font-weight: 400;
                                    margin-left: 10px;
                                }
                                .wip-check {
                                    width: 15px;
                                    cursor: pointer;
                                        img{
                                            width: 100%;
                                        }
                                }
                            }

                            .icons-wrapper {
                                display: flex;
                                align-items: center;
                                    div {
                                        width: 12px;
                                        margin-right: 15px;
                                        outline: none;
                                        cursor: pointer;
                                            img {
                                                width: 100%;
                                            }
                                    }
                            }

                    }
                    .item-info form {
                        display: flex;
                        flex-direction: column;
                        margin-top: 80px;
                            input {
                                border: none;
                                outline: none;
                                border-bottom: 1px solid #DCDBDB;
                            }
                            button {
                                margin-top: 20px;
                                border: none;
                                outline: none;
                                background: none;
                                width: 8%;
                                align-self: flex-end;
                                cursor: pointer;
                                img {
                                    width: 100%;
                                }
                            }
                    }
                    .item-info .add-item {
                        margin-top: 20px;
                        border: none;
                        outline: none;
                        background: none;
                        width: 9%;
                        float: right;
                        cursor: pointer;
                        img {
                            width: 100%;
                        }
                    }

            }
    }

`;

const Todo = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSbOnKeypress = e => ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) && setSidebarOpen(!sidebarOpen);
    const [todoState, setTodoState] = useState(todoData);

    const doDelete = (e, itI, deI) => {
        const newState = todoState.map((it, index) => {
            if (itI === index) {
                return {
                    ...it,
                    details: [
                        ...it.details.slice(0, deI),
                        ...it.details.slice(deI + 1),
                    ],
                };
            }
            return it;
        });
        setTodoState(newState);
    };

    const toggleisOpen = index => {
        const newState = todoState.map((item, i) => {
            if (index === i) {
                return {
                    ...item,
                    isOpen: !item.isOpen,
                };
            }
            return item;
        });
        setTodoState(newState);
    };
    const doShowAddForm = index => {
        const newState = todoState.map((item, i) => {
            if (index === i) {
                return {
                    ...item,
                    addItem: true,
                };
            }
            return item;
        });
        setTodoState(newState);
    };

    const doMoveToNext = (boardIndex, detIndex) => {
        const newState = todoState.slice();
        const transitItem = newState[boardIndex].details.splice(detIndex, 1);
        newState[boardIndex + 1].details.push(transitItem[0]);
        setTodoState(newState);
    };

    const doSubmit = e => e.preventDefault();

    return (
        <LayoutWrapper>
            <SideNav open={sidebarOpen} />
            <Header toggleSB={toggleSbOnKeypress} title="To Do" />

            <WidthWrapperNoH onClick={() => setSidebarOpen(false)}>
                <TodoListDiv>
                    {
                        todoState.map((item, itemI) => (
                            <section className="td-item" key={`${item.title}-${randomstring.generate(11)}`}>
                                <div
                                    role="button"
                                    tabIndex={0}
                                    className="arrow-div"
                                    onClick={() => toggleisOpen(itemI)}
                                    onKeyPress={() => toggleisOpen(itemI)}
                                >
                                    <img
                                        src={rightIcon}
                                        alt="arrow"
                                        style={{
                                            transform: item.isOpen ? 'rotate(90deg)' : null,
                                        }}
                                    />
                                </div>
                                <header>
                                    <section className="caption">
                                        <p>{item.details.length}</p>
                                        <h3 style={{
                                            background: item.isOpen ? '#CCCCCC' : null,
                                            width: item.isOpen ? '95%' : null,
                                        }}
                                        >
                                            {item.title}
                                        </h3>
                                    </section>

                                    {item.isOpen && (
                                        <section className="item-info">
                                            {item.details.map((det, detI) => (
                                                <div className="element" key={`${det.length}-${randomstring.generate(8)}`}>
                                                    <section className="parag">
                                                        {itemI === 3
                                                    && (
                                                        <div
                                                            role="button"
                                                            tabIndex={0}
                                                            onClick={() => doMoveToNext(itemI, detI)}
                                                            onKeyPress={() => doMoveToNext(itemI, detI)}
                                                            className="wip-check"
                                                        >
                                                            <img src={check} alt="done wip" />
                                                        </div>
                                                    )}
                                                        <p>{det}</p>
                                                    </section>
                                                    <section className="icons-wrapper">
                                                        <div
                                                            role="button"
                                                            tabIndex={0}
                                                            onClick={e => doDelete(e, itemI, detI)}
                                                            onKeyPress={e => doDelete(e, itemI, detI)}
                                                        >
                                                            <img src={cancelIcon} alt="delete" />
                                                        </div>
                                                        {itemI === 3 || itemI === 4
                                                            ? null
                                                            : (
                                                                <div
                                                                    role="button"
                                                                    tabIndex={0}
                                                                    onClick={() => doMoveToNext(itemI, detI)}
                                                                    onKeyPress={() => doMoveToNext(itemI, detI)}
                                                                >
                                                                    <img src={downArrow} alt="arrow" />
                                                                </div>
                                                            )}
                                                    </section>
                                                </div>
                                            ))}
                                            {item.addItem ? (
                                                <form onSubmit={doSubmit}>
                                                    <input type="text" maxLength="50" placeholder="add item" />
                                                    <button type="submit"><img src={check} alt="mark" /></button>
                                                </form>
                                            )
                                                : (
                                                    <button
                                                        className="add-item"
                                                        type="button"
                                                        onClick={() => doShowAddForm(itemI)}
                                                        onKeyPress={() => doShowAddForm(itemI)}
                                                    >
                                                        <img src={add} alt="add item" />
                                                    </button>
                                                )}
                                        </section>
                                    )}
                                </header>
                            </section>

                        ))
                    }
                </TodoListDiv>
            </WidthWrapperNoH>

        </LayoutWrapper>
    );
};

export default Todo;
