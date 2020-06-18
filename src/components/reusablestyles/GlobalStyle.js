import styled from 'styled-components';

const LayoutWrapper = styled.div`
    width: 100%;
    // height: 100vh;
    display: flex;
    justify-content: center;
`;

const WidthWrapper = styled.div`
    background-color: #263a79;
    padding: 100px 40px 20px;
    max-width: 500px;
    width: 100%;
    height: 750px;
    color: white;
    @media (max-width: 360px) {
        padding: 100px 10px 0px;
    }
`;

const WidthWrapperCenter = styled.div`
    color: white;
    background-color: #263a79;
    padding-top: 100px;
    max-width: 500px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export {
    LayoutWrapper,
    WidthWrapper,
    WidthWrapperCenter
};
