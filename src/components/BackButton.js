import { useHistory } from "react-router-dom";
import styled from "styled-components";

const BackButton = ({ className, name }) => {
    
    let history = useHistory();

    return (
        <Button className={className} onClick={() => history.goBack()}>{name}</Button>
    );
}

export default BackButton;

const Button = styled.button`
    background-color: rgba(255,255,255,0.075);
    border: 0px solid transparent;
    border-radius: 10px;
    box-shadow: inset 3px 4px 8px black;
    color: #ccc;
    cursor: pointer;
    font-family: 'Kanit';
    font-size: 3.2rem;
    font-weight: 400;
    left: 2rem;
    line-height: 5rem;
    position: absolute;
    text-shadow: 0px 0px 0px transparent;
    transition: all 0.2s ease;
    top: 2rem;
    width: 15rem;
    &:hover {
        background-color: rgba(255,255,255,0.16);
        box-shadow: inset 4px 5px 8px black;
        color: white;
    }
    @media (max-width: 1920px) {
        font-size: 3rem;
        width: 12rem;   
    }
`;