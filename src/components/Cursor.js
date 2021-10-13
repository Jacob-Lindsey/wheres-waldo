import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import getPosition from "../utils/getPosition";
import DrawBoundingBox from "../utils/drawBoundingBox";

const Cursor = (props) => {

    const [boxPosition, setBoxPosition] = useState({left: -100, top: -100});

    const boxRef = useRef();

    useEffect(() => {
        const refPersist = props.canvasRef.current; 
        let position = (e) => {
            let arr = getPosition(e, props.canvasRef, refPersist);
            if (arr[0] && arr[1] && arr[2]) {
                DrawBoundingBox(arr, setBoxPosition);
            }
        }
        window.addEventListener('mousemove', position);
        return () => {
            window.removeEventListener('mousemove', position);
          }
    }, [props.canvasRef]);

    return (
        <BoxWrapper style={boxPosition} ref={boxRef}>
            <Box />
        </BoxWrapper>
    );
}

export default Cursor;

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