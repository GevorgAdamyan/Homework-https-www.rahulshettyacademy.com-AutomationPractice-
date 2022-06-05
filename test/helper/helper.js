module.exports = {
    mainPageTitle: "Practice Page",
    countryNameLetters: "ar",
    newWindowPageTitle: "Featured Courses",
    randomIndex() {
        return Math.floor(Math.random() * (5 - 2) + 2);
    },
    randomIndexForCheckbox() {
        return Math.floor(Math.random() * (4 - 1) + 1);
    },
    randomStringGenerator() {
        let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        let letters = [];
        for (let i = Math.floor(Math.random() * (10 - 2) + 2); i > 0; i--) {
            let ind = Math.floor(Math.random() * abc.length);
            let newLetter = abc[ind];
            letters.push(newLetter);
        }
        let newWord = letters.join('');
        return newWord;
    }
}
