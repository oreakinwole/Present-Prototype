/* eslint-disable no-console */
import React, { useState, useRef } from 'react';
import randomstring from 'randomstring';
import Header from '../../../components/Header';
import {
    LayoutWrapper, WidthWrapperNoH
} from '../../../components/reusablestyles/GlobalStyle';
import SideNav from '../../../components/SideNav';
import { TodoListDiv } from './style';
import { todoData } from '../../../utility';
import rightIcon from '../../../assets/right_gt.svg';
import cancelIcon from '../../../assets/cancel.svg';
import downArrow from '../../../assets/arrow-down.svg';
import check from '../../../assets/check.svg';
import compose from '../../../assets/compose.svg';

const Todo = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSbOnKeypress = e => ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) && setSidebarOpen(!sidebarOpen);
    const [todoState, setTodoState] = useState(todoData);
    const addItemVal = useRef(null);

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

    const doSubmit = (e, i, the) => {
        e.preventDefault();
        const newState = todoState.map((it, index) => {
            if (i === index) {
                return {
                    ...it,
                    details: [
                        ...it.details,
                        the,
                    ],
                };
            }
            return it;
        });
        setTodoState(newState);
    };

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
                                                <form onSubmit={e => doSubmit(e, itemI, addItemVal.current.value)}>
                                                    <input type="text" ref={addItemVal} maxLength="50" placeholder="add item" />
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
                                                        <img src={compose} alt="add" />
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
