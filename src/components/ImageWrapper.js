import React, { useEffect, useRef } from "react";
import { useAlert } from "react-alert";
import styled from "styled-components";
import { checkPosition } from "../utils/checkPosition";
import getPosition from "../utils/getPosition";
import Clock from "./Clock";
import Cursor from "./Cursor";


const ImageWrapper = (props) => {


    const { gameData, setGameData, totalTime } = props;
    const alert = useAlert();
    const canvasRef = useRef(null);
    const levelImage = gameData.image;

    useEffect(() => {
        let handleSelection = (e) => {
            let arr = getPosition(e, canvasRef);
            if (arr[0] && arr[1] && arr[2]) {
                let isValid = checkPosition(arr, gameData);
                alert.removeAll();
                isValid
                    ? alert.success('Correct!')
                    : alert.error('Nope, try again...');
                if (isValid) {
                    isValid.found = true;
                    setGameData(prev => ({
                        ...prev,
                        isValid
                    }))
                }
            }
        }
        window.addEventListener('click', handleSelection);
        return () => {
            window.removeEventListener('click', handleSelection);
          }
    }, [gameData]);

    return (
        <>
            <Clock totalTime={totalTime} />
            <Cursor canvasRef={canvasRef} />
            <Image src={levelImage} ref={canvasRef} />
        </>
    );
};

export default React.memo(ImageWrapper);

/* APSECT RATIO = 1.7348 */

const Image = styled.img`
    border: 4px solid rgba(205, 193, 194, 0.6);
    border-radius: 10px;
    box-shadow: 9px 9px 18px 3px rgba(10, 10, 10, 0.6); 
    cursor: crosshair;
    height: 100%;
    outline: 2px solid rgba(255, 255, 255, 0.3);
    outline-offset: -10px;
    position: relative;
    width: 1400px;
    @media (max-width: 1920px) {
        height: 807px;
        width: 1400px;   
    }
    @media (max-width: 1000px) {
        width: 100%;   
    }
`;