import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router';
import { logOut } from '../services/firebase';
import { Link } from 'react-router-dom';
import Login from '../Login';
import Logout from './Logout';
import styled from 'styled-components';

const MainMenu = (props) => {
    
    const user = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);
    
    useEffect(() => {
        if (!user) {
            setRedirect('/');
        }
    }, [user]);

    if (redirect) {
        <Redirect to={redirect} />;
    }
    let username;
    if (user) {
        username = user.displayName;
    } else {
        username = 'Anon-User';
    }
    

  return (
      <MenuContainer>
          {!user 
            ?
                <>
                    <Login />
                    <UsernameText>LOGIN TO TRACK YOUR SCORE {username}</UsernameText>
                </>
            :
                <>
                    <Logout />
                    <UsernameText>SIGNED IN AS: {username}</UsernameText>
                </>
          }
          
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

const UsernameText = styled.div`
    color: #ccc;
    font-family: 'Kanit';
    font-size: 1.9rem;
    font-weight: 300;
    position: absolute;
    right: 3rem;
    top: 2rem;
`;

const TitleText = styled.div`
    color: rgb(231,240,230);
    font-family: 'Rozha One';
    font-size: 8rem;
    letter-spacing: 2px;
    text-shadow: 8px 6px 5px black;
`;

const Button = styled(Link)`
    background-color: rgba(255,255,255,0.055);
    border: 0px solid transparent;
    border-radius: 10px;
    box-shadow: inset 3px 4px 8px black;
    color: black;
    cursor: pointer;
    font-family: 'Kanit';
    font-size: 3.3rem;
    font-weight: 500;
    left: 2rem;
    letter-spacing: 2px;
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