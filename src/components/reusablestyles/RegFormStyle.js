import styled from 'styled-components';

const RegForm = styled.form`
    width: 100%;
    // height: calc(100vh - 100px);
    padding: 40px 20px 0;
        label{
            color: #929292;
        }
        input{
            border: none;
            outline: none;
            width: 100%;
            background: none;
            border-bottom: 1px solid #fff;
            margin-bottom: 10%;
            margin-top: 5%;
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
    color: ${({ signingIn, isLogginIn }) => (signingIn || isLogginIn ? 'white' : null)};
    border: ${({ signingIn, isLogginIn }) => (signingIn || isLogginIn ? 'none' : null)};
    outline: ${({ signingIn, isLogginIn }) => (signingIn || isLogginIn ? 'none' : null)};
    background-color:
    ${({ signingIn, isLogginIn }) => (signingIn || isLogginIn ? '#262d5a' : null)};
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
