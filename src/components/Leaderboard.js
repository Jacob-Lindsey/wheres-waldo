import { useEffect, useRef, useState } from 'react';
import useFirestore from '../services/useFirestore';
import styled from 'styled-components';
import BackButton from './BackButton';
import { GameImageData } from './GameImageData';

const Leaderboard = () => {

    const levelRef = useRef(0);
    const [level, setLevel] = useState(0);
    const [data] = useFirestore(
                                'leaderboard'
                                ,GameImageData[level].name
                                ,'public'
                                )    


  return (
      <Wrapper>
        <Levels>
            <LevelTile active={level === 0 ? true : false} onClick={() => {levelRef.current=level; setLevel(0);}} img={GameImageData[0].image}>Midnight Oil</LevelTile>
            <LevelTile active={level === 1 ? true : false} onClick={() => {levelRef.current=level; setLevel(1)}} img={GameImageData[1].image}>Lunch Break</LevelTile>
            <LevelTile active={level === 2 ? true : false} onClick={() => {levelRef.current=level; setLevel(2)}} img={GameImageData[2].image}>Afterparty Cleanup</LevelTile>
        </Levels>
        <LeaderboardContainer>
            <BackButton name='BACK' />
            <TitleText>LEADERBOARD</TitleText>
            <ItemContainer>
                
                {
                    data !== null && data.map((doc) => {
                        return (
                            <Item key={doc.id}>
                                <Name>{doc.user}</Name>
                                <Score>{doc.score.toFixed(0)}</Score>
                                <Time>{doc.time} seconds</Time>
                            </Item>
                        )
                    })
                }

            </ItemContainer>
        </LeaderboardContainer>
      </Wrapper>
  );
}

export default Leaderboard;

const Wrapper = styled.div`
    display: flex;
    width: 65%;
`;

const Levels = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 9rem;
    width: 375px;
`;

const LevelTile = styled.div`
    color: white;
    cursor: pointer;
    font-family: 'Kanit';
    font-size: 1.8rem;
    font-weight: 600;
    height: 8rem;
    outline: ${props => props.active ? '2px' : '1px'} solid white;
    position: relative;
    transition: all 0.3s ease-in-out;
    -webkit-text-stroke: 1.2px black;
    width: 100%;
    &:before {
        background-image: url(${props => props.img});
        background-position: center center;
        bottom: 0;
        content: '';
        filter: blur(1px) grayscale(${props => props.active ? '0%' : '90%'});
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: none;
        transition: all 0.4s ease-in-out;
        width: 100%;
        z-index: -1;
    }
    &:hover:before {
        filter: blur(0.9px) grayscale(20%);
        transform: scale(1.03);
    }
    &:hover {
        font-size: 1.85rem;
        outline: 2px solid white;
    }
`;

const LeaderboardContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10%;
    justify-content: center;
    max-width: 1000px;
    width: 100%;
`;

const TitleText = styled.div`
    color: rgb(231,240,230);
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
    height: 50rem;
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
    background-color: rgba(255,255,255,0.15);
    border: 1px solid rgba(200,200,200,0.4);
    border-radius: 10px;
    color: black;
    cursor: pointer;
    display: flex;
    font-family: 'Kanit';
    justify-content: space-between;
    line-height: 5rem;
    width: 97%;
`;

const Name = styled.div`
    font-size: 3rem;
    font-weight: 500;
    margin-left: 15px;
    text-align: left;
    width: 35%;
`;

const Score = styled.div`
    font-size: 3.2rem;
    font-weight: 500;
`;

const Time = styled.div`
    font-size: 3rem;
    font-weight: 500;
    margin-right: 15px;
`;

const Acc = styled.div`
    font-size: 3rem;
    font-weight: 500;
    margin-right: 15px;
`;