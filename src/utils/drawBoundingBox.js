// Sets the css position values for the in-game cursor in order to keep the user cursor in the center of the element. 

const DrawBoundingBox = (pos, setBoxPosition) => {
    setBoxPosition({
        left: pos[0] + pos[3] - 54,
        top: pos[1] + pos[4] - 54,
    });
    
};

export default DrawBoundingBox;