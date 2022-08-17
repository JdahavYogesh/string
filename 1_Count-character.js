const countCharacters = (S) => {
    let countOfA = 0;
    let countOfD = 0;
    for (let character of S) {
        if (character === "A") {
            countOfA++;
        } else if (character === "D") {
            countOfD++;
        }
    }
    let B = [countOfA, countOfD];
    return B;
};

console.log(countCharacters("AbaDd"));