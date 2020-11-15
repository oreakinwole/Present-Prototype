import React from 'react';
import styled from 'styled-components';
import f1 from '../images/productslide/f1.png'
import f2 from '../images/productslide/f2.png'
import f3 from '../images/productslide/f3.png'
import f4 from '../images/productslide/f4.png'


const Wrapper = styled.div`
    width: 100%;
    padding: 0 56px;
    color: #000;
    font-style: normal;
    display: flex;
    align-items: center;
    overflow: hidden;

    margin-bottom: 130px;

    .item {
        width: 364px;
        border-radius: 20px;
        margin-right: 20px;

            .title {
                font-weight: normal;
                font-size: 24px;
                line-height: 161.2%;
                margin: 14px 0 10px;
            }
            .desc {
                font-weight: 300;
                font-size: 16px;
                line-height: 24px;
                margin-bottom: 10px;
            }

            footer {
                width: 242px;
                height: 32px;
                border-radius: 5px;
                background: #000;
                color: white;
                display: flex;
                justify-content: space-evenly;
                align-items: center;

                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
            }
    }
`;

const data = [
    {
        img: f1,
        title: 'Jollof Rice & Beef',
        desc: 'Same as our regular Jollof rice but Meatier.  Perfect for a large party.',
        price: '₦ 4,670.00',
    },

    {
        img: f2,
        title: 'Jollof Rice & Beef',
        desc: 'Same as our regular Jollof rice but Meatier.  Perfect for a large party.',
        price: '₦ 4,670.00',
    },
    {
        img: f3,
        title: 'Jollof Rice & Beef',
        desc: 'Same as our regular Jollof rice but Meatier.  Perfect for a large party.',
        price: '₦ 4,670.00',
    },
    {
        img: f4,
        title: 'Jollof Rice & Beef',
        desc: 'Same as our regular Jollof rice but Meatier.  Perfect for a large party.',
        price: '₦ 4,670.00',
    },

]
const ProductSlide = () => (
    <Wrapper>
        {
            data.map(cur => (
                <div className="item">
                    <header><img src={cur.img} alt="foodPic" /> </header>
                    <p className="title">{cur.title}</p>
                    <p className="desc">{cur.desc}</p>
                    <footer>
                        <div>{cur.price}</div>
                        <div>
                            <svg width="2" height="16" viewBox="0 0 2 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0V16" stroke="white" stroke-width="0.4" />
                            </svg>
                        </div>
                        <div>Add to Cart</div>
                    </footer>
                </div>
            ))
        }

    </Wrapper>

);

export default ProductSlide;
