import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 56px;

    
`;

const Heading = (props) => (
    <Container>
        {props.children}
    </Container>
);

export default Heading;
