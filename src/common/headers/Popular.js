import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 72px;
    color: #000;
`;

const RightAside = styled.aside`
    div{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #000;
        display: inline-flex;
        align-items: center;
        justify-content: center;
            :nth-child(2){margin-left: 22px;}
    }
`;

const Content = () => (
    <>
        <Title>What’s Popular?</Title>

        <RightAside>
            <div style={{ cursor: 'pointer' }}>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8H19M8 15L1 8L8 15ZM1 8L8 1L1 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

            <div style={{ cursor: 'pointer' }}>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 8L1 8M12 0.999999L19 8L12 0.999999ZM19 8L12 15L19 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
        </RightAside>
    </>

);

export default Content;
