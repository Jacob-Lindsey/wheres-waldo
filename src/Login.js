import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { signInWithGoogle } from './services/firebase';
import { UserContext } from "./providers/UserProvider";
import { Redirect } from "react-router";
import './App.css';

export default function Login() {

    const user = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);
    useEffect(() => {
        if (user) {
            setRedirect('/');
        }
    }, [user]);

    if (redirect) {
        <Redirect to={redirect} />
    }

    return (
        <LoginButton onClick={signInWithGoogle}>
            <span> SIGN IN WITH GOOGLE </span>
        </LoginButton>
    );
}

const LoginButton = styled.button`
    background-color: rgba(255,255,255,0.085);
    border: 0px solid transparent !important;
    border-radius: 8px;
    border-style: none;
    color: #ccc;
    box-shadow: inset 3px 4px 8px black;
    font-family: 'Kanit';
    font-size: 1.05rem;
    font-weight: 500;
    height: 4rem;
    position: absolute;
    right: 2rem;
    top: 2rem;
    transition: all 0.2s ease;
    width: 12rem;
    &:hover {
        background-color: rgba(255,255,255,0.16);
        color: white;
        box-shadow: inset 4px 6px 10px black;
    }
`;
