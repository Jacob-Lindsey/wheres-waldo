export default function calculateRating(numberOfItems, numberOfClicks, totalTime) {
    let newRating = 0;
    let minClicks = numberOfItems; // 11
    let minTime = numberOfItems * 20; // 220 (22.0 seconds OR 220 units)

    let maxScore = 100000;
    let timePenalty = ((totalTime - minTime) * 100);
    let clickPenalty = minClicks / numberOfClicks;
    let score = (maxScore - timePenalty) * clickPenalty;
    let simplifiedScore = score / maxScore;

    if (simplifiedScore > 0.9) {
        newRating = 5;
    } else if (simplifiedScore > 0.8) {
        newRating = 4;
    } else if (simplifiedScore > 0.6) {
        newRating = 3;
    } else if (simplifiedScore > 0.4) {
        newRating = 2;
    } else if (simplifiedScore > 0.2) {
        newRating = 1;
    } else {
        newRating = 0;
    }
    return [newRating, score];
}