import { logOut } from "../services/firebase";
import styled from "styled-components";

const Logout = () => {

    return (
        <ButtonWrapper onClick={logOut}>
            <ButtonImg src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
                alt="google icon"
            />
            <span> LOGOUT </span>
        </ButtonWrapper>
    )
};

export default Logout;

const ButtonWrapper = styled.div`
    align-items: center;
    background-color: rgba(255,255,255,0.075);
    border: 0px solid transparent;
    border-radius: 10px;
    box-shadow: inset 3px 4px 8px black;
    cursor: pointer;
    display: flex;
    font-family: 'Kanit';
    font-size: 2.4rem;
    font-weight: 600;
    justify-content: space-evenly;
    right: 4rem;
    line-height: 5rem;
    position: absolute;
    text-shadow: 0px 0px 0px transparent;
    transition: all 0.2s ease;
    top: 6rem;
    width: 15rem;
    &:hover {
        background-color: rgba(255,105,105,0.3);
        box-shadow: inset 4px 5px 8px black;
    }
`;

const ButtonImg = styled.img`
    color: white;
    height: 60%;
`;