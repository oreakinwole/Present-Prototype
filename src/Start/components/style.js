import styled from 'styled-components';

const StartCircle = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 1px solid #3C56A8;
    font-size: 2em;
    font-weight: lighter;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    padding: 0px 80px;
    text-align: center;
    cursor: pointer;
`;

const RangeBar = styled.div`
    margin-top: 40px;
    background: #3C56A8;
    border-radius: 20px;
    height: 12px;
    width: 90%;
`;

const PointsIndictor = styled.p`
    font-size: 1.8em;
`;

export {
    StartCircle,
    RangeBar,
    PointsIndictor
};
