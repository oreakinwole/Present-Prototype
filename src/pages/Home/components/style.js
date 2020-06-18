import styled from 'styled-components';

const WidthWrapperCenterHome = styled.div`
    padding-top: 100px;
    max-width: 500px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        .login-links {
            border: none;
            cursor: pointer;
            width: 70%;
            text-decoration: none;
            text-align: center;
            background-color: green;
            border-radius: 30px;
            font-size: 1.1em;
            margin-bottom: 10px;
                &:nth-of-type(1) {
                    background-color: #267968;
                    color: white;
                }
                &:nth-of-type(2) {
                    background-color: #263a79;
                    color: white;
                }
                &:nth-of-type(3) {
                    background-color: #d2d2d2;
                    color: #6c6c6c;
                }
                &:focus{
                    outline:none;
                }
        }
`;

const LogoDiv = styled.div`
    text-align: center;
    img{
        max-width: 200px;
        height: auto;
    }
`;

const CaptionPara = styled.p`
    text-align: center;
    width: 70%;
    color: #6c6c6c;
`;

export {
    LogoDiv, CaptionPara, WidthWrapperCenterHome
};
