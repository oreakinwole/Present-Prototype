import styled from 'styled-components';

const RegForm = styled.form`
    background-color: #263a79;
    width: 100%;
    height: calc(100vh - 100px);
    padding: 40px 20px 0;
        label{
            color: #929292;
        }
        input{
            border: none;
            outline: none;
            width: 100%;
            height: 40px;
            background: none;
            border-bottom: 1px solid #fff;
            margin-bottom: 40px;
            color: #fff;
            transition: all .4s;
            &:focus{
                border-bottom: 1px solid #816e77;
            }
        }
`;

const RegSubmitBtn = styled.button`
    width: 90%;
    height: 50px;
    font-size: 1.3em;
    margin-left: 4%;
    margin-top: 20px;
    cursor: pointer;
    transition: all .2s;
    color: ${({ siginingIn, isLogginIn }) => (siginingIn || isLogginIn ? 'white' : null)};
    border: ${({ siginingIn, isLogginIn }) => (siginingIn || isLogginIn ? 'none' : null)};
    outline: ${({ siginingIn, isLogginIn }) => (siginingIn || isLogginIn ? 'none' : null)};
    background-color:
    ${({ siginingIn, isLogginIn }) => (siginingIn || isLogginIn ? '#262d5a' : null)};
        &:hover{
            color: #fff;
            background-color:#262d5a;
            outline:none;
            border: none;
        }
`;

export {
    RegForm, RegSubmitBtn
};
