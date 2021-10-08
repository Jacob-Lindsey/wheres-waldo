import styled from 'styled-components';
import BackButton from './BackButton';

const Leaderboard = (props) => {
    
  return (
      <LeaderboardContainer>
          <BackButton />
          <TitleText>LEADERBOARD</TitleText>
          <ItemContainer>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </ItemContainer>
      </LeaderboardContainer>
  );
}

export default Leaderboard;

const LeaderboardContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10%;
    justify-content: center;
    max-width: 1100px;
    width: 60%;
`;

const TitleText = styled.div`
    color: #ccc;
    font-family: 'Kanit';
    font-size: 6rem;
    font-weight: 300;
    letter-spacing: 2px;
    text-shadow: 4px 3px 5px black;
`;

const ItemContainer = styled.div`
    display: grid;
    gap: 10px;
    grid-auto-rows: 6rem;
    height: 55rem;
    justify-items: center;
    overflow-y: scroll;
    width: 100%;
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.9);
        border-radius: 10px;
        background-color: rgba(210,210,210,0.2);
    }
    &::-webkit-scrollbar {
        width: 12px;
	    background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(240,230,240,0.8);
	    background-image: -webkit-linear-gradient(90deg,
                                    transparent,
                                    rgba(0, 0, 0, 0.2) 50%,
                                    transparent,
                                    transparent);
    }
`;

const Item = styled.div`
    border: 1px solid rgba(200,200,200,0.4);
    border-radius: 10px;
    color: black;
    cursor: pointer;
    font-family: 'Kanit';
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 5rem;
    width: 90%;
`;