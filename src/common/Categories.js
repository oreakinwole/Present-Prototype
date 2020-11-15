import React from 'react';
import styled from 'styled-components';
import fp1 from '../images/cat/f1.png'
import fp2 from '../images/cat/f2.png'
import fp3 from '../images/cat/f3.png'
import fp4 from '../images/cat/f4.png'


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
        
        background: url(${fp1}), linear-gradient(360deg, rgba(56, 56, 56, .9) -22.58%, rgba(84, 84, 84, 0) 197.58%);
        background-blend-mode: overlay;

        display: flex;
        justify-content: center;
        align-items: center;

        :nth-of-type(2){background-image: url(${fp2});}
        :nth-of-type(3){background-image: url(${fp3});}
        :nth-of-type(4){background-image: url(${fp4});}
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

        <div className="item">
            <p>Fast Foods</p>
        </div>
        <div className="item">
            <p>Pizzas</p>
        </div>
        <div className="item">
            <p>Beef Soups</p>
        </div>

    </Wrapper>

);

export default ProductSlide;
