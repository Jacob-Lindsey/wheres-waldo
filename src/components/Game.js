import { useEffect, useRef, useState } from 'react';
import { GameImageData } from './GameImageData';
import BackButton from './BackButton';
import calculateRating from '../utils/calculateRating';
import GameOverScreen from './GameOverScreen';
import isGameOver from '../utils/isGameOver';
import HUD from './HUD';
import ImageWrapper from './ImageWrapper';

const Game = (props) => {

    const { isGameStarted, level, ratings, setRatings } = props;
    const [gameData, setGameData] = useState({ ...GameImageData[level] });    
    const clickRef = useRef(0);
    let gameOverRef = useRef(false);
    const totalTime = useRef(0);
    const score = useRef(0);

    // Updates the global star rating values
    useEffect(() => {
        let prevRatings = [...ratings];
        if (isGameOver(gameData.items) === true) {
            let newRating = calculateRating(
                gameData.items.length,
                clickRef.current,
                totalTime.current
            )
            prevRatings[level] = newRating[0];
            score.current = newRating[1];
            setRatings(prev => prevRatings);
            gameOverRef.current = true;
        };
    },[gameData])

    // Tracks the number of clicks per level for score purposes
    useEffect(() => {
        let incrementClickCounter = () => {
            if (!gameOverRef.current) {
                clickRef.current++;
            }
        }
        window.addEventListener('click', incrementClickCounter);
        return () => {
            window.removeEventListener('click', incrementClickCounter);
        }
    });

    return (
        <>
            {gameOverRef.current ? <GameOverScreen gameData={gameData} rating={ratings[level]} score={score} totalTime={totalTime} timesClicked={clickRef.current} items={gameData.items.length} /> :
            <>
                <BackButton name='BACK' />
                <HUD
                level={level}
                isGameStarted={isGameStarted}
                gameData={gameData}
                />
                <ImageWrapper
                    level={level}
                    gameData={gameData}
                    setGameData={setGameData}
                    totalTime={totalTime}
                />
            </>
            }   
        </>
    );
}

export default Game;