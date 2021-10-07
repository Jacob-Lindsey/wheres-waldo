export const isCoordCorrect = (pos1,pos2) => {
    for (let i = 0; i < 40; i++) {
        if (pos1 + i === pos2 || pos1 - i === pos2) {
            return true
        }
    }
    return false;
};