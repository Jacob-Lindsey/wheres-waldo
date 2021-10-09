import { useEffect, useState } from 'react';
import { GameImageData } from './GameImageData';
import BackButton from './BackButton';
import GameOverScreen from './GameOverScreen';
import HUD from './HUD';
import ImageWrapper from './ImageWrapper';

const Game = (props) => {

    const [gameData, setGameData] = useState({ ...GameImageData[props.level] });
    const [gameOver, setGameOver] = useState(false);
    const [timesClicked, setTimesClicked] = useState(0);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const isGameOver = gameData.items.every((item) => {
            return (item.found === true);
        });
        let prevRatings = props.ratings;
        if (isGameOver === true) {
            let newRating = 0;
            let score = gameData.items.length / timesClicked;
            if (score === 1) {
                newRating = 5;
            } else if (score > 0.8) {
                newRating = 4;
            } else if (score > 0.6) {
                newRating = 3;
            } else if (score > 0.4) {
                newRating = 2;
            } else if (score > 0.2) {
                newRating = 1;
            } else {
                newRating = 0;
            }
            setRating(newRating);
            prevRatings[props.level] = rating;
            props.setRatings(prevRatings);
            setGameOver(true);
        };
    },[gameData, props, rating, setGameOver, timesClicked])

    useEffect(() => {
        let incrementClickCounter = () => {
            if (!gameOver) {
                setTimesClicked(timesClicked + 1);
            }
        }
        window.addEventListener('click', incrementClickCounter);
        return () => {
            window.removeEventListener('click', incrementClickCounter);
        }
    });

    return (
        <>
            {gameOver ? <GameOverScreen gameData={gameData} rating={rating} timesClicked={timesClicked} items={gameData.items.length} /> :
            <>
                <BackButton name='BACK' />
                <HUD
                level={props.level}
                isGameStarted={props.isGameStarted}
                gameData={gameData}
                />
                <ImageWrapper
                    level={props.level}
                    gameData={gameData}
                    setGameData={setGameData}
                />
            </>
            }   
        </>
    );
}

export default Game;