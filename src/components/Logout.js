import styled from 'styled-components';
import '../App.css';

import { logOut } from "../services/firebase";

const Logout = () => {

    return (
        <LogOutButton className="logout-button" onClick={logOut}>
            <span> SIGN OUT </span>
        </LogOutButton>
    )
};

export default Logout;

const LogOutButton = styled.button`
    background-color: rgba(255,255,255,0.085);
    border: 0px solid transparent !important;
    border-radius: 8px;
    border-style: none;
    color: #ccc;
    box-shadow: inset 3px 4px 8px black;
    font-family: 'Kanit';
    font-size: 1.5rem;
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