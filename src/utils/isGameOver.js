export default function isGameOver(items) {
    let check = items.every((item) => {
        return (item.found === true);
    });
    return check;
}