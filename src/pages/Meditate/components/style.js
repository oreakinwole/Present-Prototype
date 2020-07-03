import styled from 'styled-components';
import calmImg from '../../../assets/calm_img2.jpg';

const WidthWrapperCenterMedi = styled.div`
    color: white;
    background: #263a79 url(${calmImg}) no-repeat center;
    background-size: cover;
    padding-top: 100px;
    max-width: 500px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StartCircle = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 1px solid #fff;
    font-size: 2em;
    font-weight: lighter;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    padding: 0px 80px;
    text-align: center;
    cursor: pointer;
    @media (max-width: 360px) {
        width: 250px;
        height: 250px;
        padding: 0px 40px;
    }
`;

const RangeBar = styled.div`
    margin-top: 40px;
    background: #3C56A8;
    border-radius: 20px;
    height: 12px;
    width: 90%;
`;

const PointsIndictor = styled.p`
    margin-bottom: 5px;
    font-size: 1.8em;
`;

const SoundControls = styled.div`
    position: absolute;
    bottom: 5%;
    display: flex;
    justify-content: space-evenly;
        div {
            width: 60px;
            height: 60px;
            border: 1px solid rgba(0, 192, 244, 0.20);
            text-align: center;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            font-size: 2em;
            margin: 0 10px;
            svg{
                max-width: 20px;
            }
            &:focus {
                outline: none;
            }
        }
        @media(max-width: 375px) {
            bottom: 10px;
        }
`;

export {
    WidthWrapperCenterMedi,
    StartCircle,
    RangeBar,
    PointsIndictor,
    SoundControls
};
