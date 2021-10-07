const GameOverScreen = (props) => {

    return (
        <div>
            GAME OVER SCREEN!
            <br />
            <h1>{props.timesClicked} CLICKS!</h1>
        </div>
    );
}

export default GameOverScreen;