// Gets the current position of the cursor, and caclulates it's relative position within the image element.
// wasImageClicked acts as border detection.

const getPosition = (e, el, refPersist) => {
    const target = el.current != null ? el.current : refPersist;
    const wasImageClicked = el.current === e.target;
    const rect = target.getBoundingClientRect();
    const offsetLeft = Math.round(rect.x);
    const offsetTop = Math.round(rect.y);
    const relativeX = e.pageX - offsetLeft;
    const relativeY = e.pageY - offsetTop;
    return ( [relativeX, relativeY, wasImageClicked, offsetLeft, offsetTop] );
}

export default getPosition;