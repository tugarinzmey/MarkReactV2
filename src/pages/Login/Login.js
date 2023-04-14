import React from "react";
import { LoginForm } from "./LoginForm";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginFormWrapper = styled.div`
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
`

const Login = () => {
    const { status } = useSelector((state) => state.rootReducer.authSlice);
    return (
        <LoginFormWrapper>
            <LoginForm />
            <>
                {status === "loggedIn" ? <Navigate to={'/'} /> : null}
            </>
        </LoginFormWrapper>
    );
}

export default Login