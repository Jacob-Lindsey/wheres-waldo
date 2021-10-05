const getPosition = (e, el) => {
    const target = el.current;
    const wasImageClicked = el.current === e.target;
    const rect = target.getBoundingClientRect();
    const offsetLeft = Math.round(rect.x);
    const offsetTop = Math.round(rect.y);
    const relativeX = e.pageX - offsetLeft;
    const relativeY = e.pageY - offsetTop;
    
    console.log([relativeX, relativeY, wasImageClicked]);

    return ( [relativeX, relativeY, wasImageClicked] );
}

export default getPosition;