import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainMenu = (props) => {
    
  return (
      <MenuContainer>
          <TitleText>HIDDEN OBJECTS</TitleText>
          <Button to="/levelselect">PLAY</Button>
          <Button to="/leaderboard">LEADERBOARD</Button>
          <Button to="/options">OPTIONS</Button>
      </MenuContainer>
  );
}

export default MainMenu;

const MenuContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10%;
    height: 50rem;
    justify-content: center;
    max-width: 1100px;
    width: 60%;
`;

const TitleText = styled.div`
    color: gold;
    font-family: 'Rozha One';
    font-size: 8rem;
    letter-spacing: 2px;
    text-shadow: 4px 3px 5px black;
`;

const Button = styled(Link)`
    background-color: rgba(255,255,255,0.055);
    border: 0px solid transparent;
    border-radius: 10px;
    box-shadow: inset 3px 4px 8px black;
    color: black;
    cursor: pointer;
    font-family: 'Kanit';
    font-size: 3.5rem;
    font-weight: 500;
    left: 2rem;
    line-height: 5rem;
    text-shadow: 0px 0px 0px transparent;
    transition: all 0.2s ease;
    top: 2rem;
    width: 70%;
    &:hover {
        background-color: rgba(255,255,255,0.095);
        box-shadow: inset 4px 6px 10px black;
    }
`;