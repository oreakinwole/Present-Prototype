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
    @media(max-width: 450px) {
        padding-top: 50px;
    }
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
    @media (max-width: 450px) {
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
        div {
            border-radius: 20px;
            background: white;
            width: ${({ musicProgress }) => (musicProgress > 0) && `${musicProgress}%`};
            height: 100%;
        }
`;

const PointsIndictor = styled.p`
    margin-bottom: 5px;
    font-size: 1.8em;
`;

const SoundControls = styled.div`
    position: absolute;
    bottom: 2%;
    display: flex;
    justify-content: space-evenly;
    // background: black;
        div {
            // background: red;
            width: 80px;
            height: 80px;
            // border: 1px solid rgba(0, 192, 244, 0.20);
            // border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin: 0 10px;
            text-align: center;
            svg{
                width: 70%;
                fill: white;
                transition: all .1s;
                &:hover{
                    transform: scale(1.2);
                }
            }
            p{
                font-size: 3em;
                transition: all .1s;
                &:hover{
                    transform: scale(1.2);
                }
                @media(max-width: 450px) {
                    font-size: 2.3em;
                }

            }
            &:focus {
                outline: none;
            }
            @media(max-width: 450px) {
                width: 50px;
                height: 50px;
            }
        }
        .pp svg{
            width: 50%;
        }
`;

const Modal = styled.div`
    position: absolute;
    top: 45%;
    padding: 10px;
    color: white;
    border-bottom: 1px solid white;
    background: rgba(0, 192, 244, 0.2);
    border-radius: 20px;
     form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        input {
            margin-right: 5px;

        }
        button {
            background: #3C56A8;
            outline: none;
            border: none;
            border-radius: 10%;
            cursor: pointer;
            align-self: center;
            margin-top: 15px;
            color: white;
        }
     }
`;
const GreatStart = styled.div`
    position: absolute;
    top: 40%;
    width: 300px;
    background: white;
    border-radius: 30px;
    color: #263a79;
    text-align: center;
    padding: 20px 0;

        .pointsno {
            margin: 0 0 10px;
            color: #db1c2e;
            font-size: 3em;
            font-weight: bolder;
        }
        h2 {
            margin: 0;
        }

        button {
            background: #263a79;
            border: none;
            border-radius: 30px;
            font-size: .8em;
            width: 70%;
            color: white;
            cursor: pointer;
            margin-bottom: 10px;
            outline:none;
        }

        a {
            cursor: pointer;
            text-decoration: none;
                p{
                    margin: 0 auto;
                    border: none;
                    border-radius: 30px;
                    font-size: .8em;
                    width: 70%;
                    padding: 15px 0;
                    color: #263a79;
                    background: #d2d2d2;
                }
                &:focus{
                    outline:none;
                }
        }
`;
export {
    WidthWrapperCenterMedi,
    StartCircle,
    RangeBar,
    PointsIndictor,
    SoundControls,
    Modal,
    GreatStart
};
