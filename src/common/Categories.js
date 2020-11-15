import React from 'react';
import styled from 'styled-components';
import foodPic from '../images/food2.png'


const Wrapper = styled.div`
    width: 100%;
    padding: 0 56px;
    font-style: normal;
    display: flex;
    align-items: center;

    .item {
        width: 318px;
        height: 248px;
        border-radius: 20px;
        margin-right: 20px;
            :last-child{margin-right: 0px;}
        
        background: linear-gradient(360deg, rgba(56, 56, 56, 0.5) -22.58%, rgba(84, 84, 84, 0) 197.58%);
        background-image: url(${foodPic});
        background-repeat: no-repeat;

        display: flex;
        justify-content: center;
        align-items: center;
        p {
            font-weight: 500;
            font-size: 32px;
            color: white;
        }
           
    }
`;

const ProductSlide = () => (
    <Wrapper>
        <div className="item">
            <p>Breakfast Foods</p>
        </div>
    </Wrapper>

);

export default ProductSlide;
