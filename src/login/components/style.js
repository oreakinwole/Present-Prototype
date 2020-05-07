import styled from 'styled-components';

export const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 78vh;

    @media(max-width: 768px){
        height: auto;
    }
`;

export const LoginForm = styled.form`
    width: 722px;
    background-color: #000000;
    color: #ffffff;
    padding: 70px 70px 40px 70px;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-Radius: 10px;

    @media(max-width: 768px){
        width: 100%;
        padding: 70px 30px 40px;
    }

    input[type='email']{
        margin-bottom: 60px;
    }

    input[type='password']{
        margin-bottom: 20px;
    }
`;

export const LoginHeader = styled.h2`
    margin: 0 0 60px 0;
`;

export const FormInput = styled.input`
    background: transparent;
    color: #ffffff
    outline: none;
    border: none;
    border-bottom: 1px solid #707070;
    padding-bottom: 10px;
    font-size: 26px;
    font-weight: 200;

    @media(max-width: 768px){
        font-size: 15px;
        margin-bottom: 35px;
    }
`;

export const ForgotPassword = styled.a`
    margin-bottom: 60px;
    text-align: right;
    color: #ffffff;
    text-decoration: none;
    padding-bottom: 1px;
    border-bottom: 1px solid;
    align-self: flex-end;

    @media(max-width: 768px){
        font-size: 12px;
    }
`;

export const FormButton = styled.button`
    margin: 0 auto 30px;
    width: 48%;
    color: #ffffff;
    border: 2px solid #ffffff;
	background-color: transparent;
    text-decoration: none;
    border-radius: 30px;
    padding: 13px;
    font-size: 20px;

    @media(max-width: 768px){
        width: 60%;
        font-size: 15px;
    }

    &:hover{
        background-color: #ffffff;
        color: #000000;
    }
`;

export const AdminButton = styled.a`
    color: #707070;
    font-size: 20px;
    text-decoration: none;

    @media(max-width: 768px){
        display: none;
    }
`;
