const DrawBoundingBox = (pos, ctx) => {

    const centerX = pos[0];
    const centerY = pos[1];
    const radius = 5;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'white';
    ctx.stroke();
}


export default DrawBoundingBox;