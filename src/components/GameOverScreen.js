import { useEffect } from "react";
import styled from "styled-components";
import bgImg from "../images/felt-bg.jpg";
import BackButton from "./BackButton";
import StarRating from "./StarRating";
import { createLeaderboardEntry } from "../utils/createLeaderboardEntry";

const GameOverScreen = (props) => {

    const acc = (props.items / props.timesClicked) * 100;
    const accuracyPercentage = acc.toFixed(2);

    useEffect(() => {
        return () => createLeaderboardEntry(
            props.gameData.name,
            props.rating,
            accuracyPercentage,
            props.totalTime.current,
            props.score.current
        );
    })
    
    return (

        <Rating img={bgImg}>
            <RatingTitle>{props.gameData.name}</RatingTitle>
            <RatingContent>
                <StarRating rating={props.rating} />
                <Score>
                    <Accuracy>ACCURACY: {accuracyPercentage} %</Accuracy>
                    <Time>TIME: &nbsp;{props.totalTime.current / 10}&nbsp; SECONDS</Time>
                    <ScoreValue>SCORE: &nbsp; {props.score.current.toFixed(0)} </ScoreValue>
                </Score>
            </RatingContent>
            <BackToLevelSelect name='CONTINUE'/>
        </Rating>
    );
}

export default GameOverScreen;

const Rating = styled.div`
    align-items: center;
    background-color: rgba(200,200,200,0.03);
    border-radius: 15px;
    box-shadow: inset 8px 5px 10px rgba(0,0,0,0.6), inset 0.5px 0.5px 3px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    padding: 50px 100px 100px 100px;

`;

const RatingTitle = styled.div`
    font-size: 6rem;
    font-weight: 600;
    text-transform: uppercase;
`;

const RatingContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Score = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
`;

const Accuracy = styled.div`
    color: #ccc;
    font-family: 'Kanit';
    font-size: 2.75rem;
    font-weight: 300;
    line-height: 6rem;
    text-align: left;
`;

const Time = styled.div`
    color: #ccc;
    font-family: 'Kanit';
    font-size: 2.75rem;
    font-weight: 300;
    line-height: 6rem;
    text-align: left;
`;

const ScoreValue = styled.div`
    color: #ccc;
    font-family: 'Kanit';
    font-size: 2.75rem;
    font-weight: 300;
    line-height: 6rem;
    text-align: left;
`;

const BackToLevelSelect = styled(BackButton)`
    bottom: 4rem;
    font-size: 2.8rem;
    height: 6rem;
    left: auto;
    right: auto;
    top: auto;
    width: 25rem;
`;