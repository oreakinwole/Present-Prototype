import styled from 'styled-components';

const LayoutWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const WidthWrapper = styled.div`
    background-color: #263a79;
    padding-top: 100px;
    max-width: 500px;
    width: 100%;
    height: 100vh;
`;

const WidthWrapperCenterHome = styled.div`
    padding-top: 100px;
    max-width: 500px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    WidthWrapperCenter,
    WidthWrapperCenterHome
};
