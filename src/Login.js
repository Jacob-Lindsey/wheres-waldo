import React, { useContext, useEffect, useState } from "react";
import { signInWithGoogle } from './services/firebase';
import { UserContext } from "./providers/UserProvider";
import { Redirect } from "react-router";
import styled from "styled-components";

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
        <div className="login-buttons">
            <ButtonWrapper onClick={signInWithGoogle}>
                <ButtonImg src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon" />
                <span> Continue with Google</span>
            </ButtonWrapper>
        </div>
    );
}

const ButtonWrapper = styled.div`
    align-items: center;
    background-color: rgba(255,255,255,0.075);
    border: 0px solid transparent;
    border-radius: 10px;
    box-shadow: inset 3px 4px 8px black;
    cursor: pointer;
    display: flex;
    font-family: 'Kanit';
    font-size: 2rem;
    font-weight: 600;
    justify-content: space-evenly;
    right: 2.6rem;
    line-height: 5rem;
    position: absolute;
    text-shadow: 0px 0px 0px transparent;
    transition: all 0.2s ease;
    top: 6rem;
    width: 26rem;
    &:hover {
        background-color: rgba(105,255,105,0.2);
        box-shadow: inset 4px 5px 8px black;
    }
`;

const ButtonImg = styled.img`
    color: white;
    height: 60%;
`;