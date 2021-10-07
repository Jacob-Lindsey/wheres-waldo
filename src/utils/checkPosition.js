import { isCoordCorrect } from "./isCoordCorrect";

export function checkPosition(arr, level) {
    let x = arr[0];
    let y = arr[1];
    let result = level.items.find((e) => {
        return ( isCoordCorrect(x, e.xPos) && isCoordCorrect(y, e.yPos) )
    });
    return result;
};