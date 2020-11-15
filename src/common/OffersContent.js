import React from 'react';
import styled from 'styled-components';
import longImg from '../images/longImg.png'

const Wrapper = styled.div`
    min-width: 100%;
    display: flex;
    margin-bottom: 80px;

        div {
            width: 1160px;
            height: 384px;
            background: url(${longImg}), rgba(67, 67, 67, 0.9);
            background-repeat: no-repeat;
            background-blend-mode: overlay;

            display: flex;
            align-items: flex-end;
            border-radius: 30px;

            padding: 0 47px 50px;
            margin-right: 24px;
            
            p {
                width: 391px;

                font-style: normal;
                font-weight: 500;
                font-size: 32px;
                line-height: 48px;
                color: #fff;
            }
        }
   
`;

const ProductSlide = () => (
    <Wrapper>
        <div>
            <p>Get 50% off a scheduled order from Tuesday!</p>
        </div>

        <div>
            <p>Get 50% off a scheduled order from Tuesday!</p>
        </div>

        <div>
            <p>Get 50% off a scheduled order from Tuesday!</p>
        </div>
    </Wrapper>

);

export default ProductSlide;
