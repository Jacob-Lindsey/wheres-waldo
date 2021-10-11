import { useEffect, useState } from 'react';
import { GameImageData } from './GameImageData';
import { db } from '../services/firebase';
import BackButton from './BackButton';
import GameOverScreen from './GameOverScreen';
import HUD from './HUD';
import ImageWrapper from './ImageWrapper';

const Game = (props) => {

    const [gameData, setGameData] = useState({ ...GameImageData[props.level] });
    const [gameOver, setGameOver] = useState(false);
    const [timesClicked, setTimesClicked] = useState(0);
    const [rating, setRating] = useState(0);
    let coords = [];
    const lvl = props.level === 0 ? 'items'
                                  : props.level === 1 ? 'items2'
                                  : 'items3';
                                  

    // Fetches coordinates for each item in the current level -> Pushes them to {coords}

    useEffect(() => {
        let items = [];
        db.collection('game-data').doc('game-data').get().then(function(doc) {
            if (doc.exists) {
                let itemData;
                doc.data()[lvl].forEach(function (item) {
                    itemData = {
                        found: false,
                        name: item.name,
                        xPos: item.xPos,
                        yPos: item.yPos
                    }
                    items.push(itemData);
                })
            } else {
                console.log("Doc doesn't exist.");
            }
        }).catch(function(error) {
            console.log("Error getting doc: ", error);
        });
        /* setGameData(prev => ({
            ...prev,
            items
        }));         */
    },[]);
    
    // Calculates the users score based on accuracy and time taken

    useEffect(() => {
        let items = [...gameData.items];
        console.log(items)
        const isGameOver = items.every((item) => {
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
           setGameOver(prev => !prev);
        };
    },[gameOver]);

    // Tracks how many clicks occured in the current level

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
                    coords={coords}
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