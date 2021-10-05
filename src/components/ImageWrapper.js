import { createContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import img1 from "../images/items-desk.jpg";
import getPosition from "../utils/getPosition";
import DrawBoundingBox from "../utils/drawBoundingBox";

const SharingContext = createContext(null);

const ImageWrapper = (draw) => {

    const canvasRef = useRef(null);
    const imgRef = useRef();
    const [renderContext, setRenderContext] = useState(null);

    useEffect(() => {
        const context2d = canvasRef.current.getContext("2d");
        setRenderContext(context2d);
        
        let position = (e) => {
            let arr = getPosition(e, canvasRef);
            if (arr[0] && arr[1] && arr[2]) {
                DrawBoundingBox(arr, context2d);
            } else {
                alert('Invalid selection. Please try again.');
            }
          }
      
          window.addEventListener('click', position);
      
          return () => {
            window.removeEventListener('click', position);
          }
    }, []);

    return (
        <SharingContext.Provider value={renderContext}>
            <Wrapper ref={canvasRef} />
        </SharingContext.Provider>
    );
};

export default ImageWrapper;

const Wrapper = styled.canvas`
  background-image: url(${img1});
  background-size: contain;
  background-repeat: no-repeat;
  max-width: 70%;
  position: absolute;
  width: 130rem;
`;
