import styled from 'styled-components';

const DetailsHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 10px;
    div:first-child {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: grey;
        @media (max-width: 360px) {
            width: 80px;
            height: 80px;
        }
    }
    div:last-child {
        width: 60%;
            p{
                text-align: right;
            }
            @media (max-width: 360px) {
                width: 65%;
                margin-right: 5%;
            }
    }
    .progress{
        width: 100%;
        height: 7px;
        background: #00c0f4;
        border-radius: 8px;
    }
`;

const PointsRow = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 60px;
    .points-col{
        div{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2em;
            @media (max-width: 360px) {
                width: 80px;
                height: 80px;
                // font-size: 1em;
            }
        }

        .p-e{
            border: 2px solid #3cbcd9;
            color: #3cbcd9;
        }
        .p-s{
            border: 2px solid #5fad47;
            color: #5fad47;
        }
        .b-p{
            border: 2px solid #da7531;
            color: #da7531;
        }

    }

`;

const TimeSpentRow = styled.section`
display: flex;
flex-direction: column;
    .ts-item{
        margin-top: -20px;
        display: flex;
        flex-direction column;
        justify-content: space-between;
        align-items: space-between;
        width: 100%;
            .details{
                margin-top: -20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                div{
                    width: 90%;
                    height: 2px;
                    border-radius: 2px;
                    background: white;
                }
            }
    }

`;

export {
    DetailsHeader, PointsRow, TimeSpentRow
};
