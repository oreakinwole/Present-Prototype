import styled from 'styled-components';

const LayoutWrapper = styled.div`
    // background-color: black;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const WidthWrapper = styled.div`
    max-width: 500px;
    width: 100%;
    height: 100vh;
`;

const WidthWrapperCenter = styled.div`
    max-width: 500px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export { LayoutWrapper, WidthWrapper, WidthWrapperCenter };
