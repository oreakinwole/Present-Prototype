import styled from 'styled-components';

const LayoutWrapper = styled.div`
    background-color: black;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const RegScreenWrapper = styled.div`
    max-width: 500px;
    width: 100%;
    height: 100vh;
`;

const Header = styled.div`
    background-color: #20243f;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: white;
        img{
            cursor: pointer;
        }
        img:nth-child(1){
            width: 30px;
        }
        
`;

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
        &:hover{
            color: #fff;
            background-color:#262d5a;
            outline:none;
            border: none;
        }
`;

export {
    LayoutWrapper, RegForm, RegScreenWrapper, Header, RegSubmitBtn
};
