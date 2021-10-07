import { useEffect, useState } from 'react';
import { GameImageData } from './GameImageData';
import GameOverScreen from './GameOverScreen';
import HUD from './HUD';
import ImageWrapper from './ImageWrapper';

const Game = (props) => {

    const [gameData, setGameData] = useState({ ...GameImageData[props.level] });
    const [gameOver, setGameOver] = useState(false);
    const [timesClicked, setTimesClicked] = useState(0);

    useEffect(() => {
        const isGameOver = gameData.items.every((item) => {
            return (item.found === true);
        });
        if (isGameOver === true) {
            setGameOver(true);
        };
    },[gameData, setGameOver])

    useEffect(() => {
        let incrementClickCounter = () => {
            setTimesClicked(timesClicked + 1);
        }
        window.addEventListener('click', incrementClickCounter);
        return () => {
            window.removeEventListener('click', incrementClickCounter);
        }
    });

    return (
        <>
            {gameOver ? <GameOverScreen timesClicked={timesClicked} /> :
            <>
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