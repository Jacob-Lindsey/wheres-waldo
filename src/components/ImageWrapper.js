import React, { useEffect, useRef, useState } from "react";
import { positions, useAlert } from "react-alert";
import styled from "styled-components";
import { checkPosition } from "../utils/checkPosition";
import getPosition from "../utils/getPosition";
import Clock from "./Clock";
import Cursor from "./Cursor";


const ImageWrapper = (props) => {

    const alert = useAlert();
    const canvasRef = useRef(null);
    const levelImage = props.gameData.image;

    useEffect(() => {
        let handleSelection = (e) => {
            let arr = getPosition(e, canvasRef);
            if (arr[0] && arr[1] && arr[2]) {
                let isValid = checkPosition(arr, props.gameData);
                isValid
                    ? alert.success('Correct!')
                    : alert.error('Nope, try again...');
                if (isValid) {
                    isValid.found = true;
                    props.setGameData(prev => ({
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
    }, [alert, props]);

    return (
        <>
            <Clock />
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

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    pointer-events: none;
    position: absolute;
    z-index: 2;
`;

const Box = styled.div`
    background-color: rgba(230,230,230,0.2);
    border: 4px solid rgba(195, 195, 235, 1);
    border-radius: 50%;
    box-shadow: inset 0px 0px 0px 2px rgba(10,10,10,0.7);
    box-shadow: 2px 4px 7px 6px rgba(0, 0, 0, 0.4);
    height: 100px;
    outline: 2px solid rgba(10,10,10,0.7);
    width: 100px;
    @media (max-width: 1000px) {
        display: none;
    }
`;