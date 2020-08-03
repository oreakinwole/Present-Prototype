import styled from 'styled-components';

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
                                width: 28px;
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
                        width: 30px;
                        float: right;
                        cursor: pointer;
                        img {
                            width: 100%;
                        }
                    }

            }
    }

`;

export {
    TodoListDiv
};
