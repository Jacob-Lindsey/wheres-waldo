import React, { useContext, useEffect, useState } from "react";
import { signInWithGoogle } from './services/firebase';
import { UserContext } from "./providers/UserProvider";
import { Redirect } from "react-router";

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
            <button className="login-provider-button" onClick={signInWithGoogle}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon" />
                <span> Continue with Google</span>
            </button>
        </div>
    );
}