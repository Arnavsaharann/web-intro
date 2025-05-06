let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.floor(Math.random() * 2); 
    if (flip === 0) {
        tailsCount++;
        console.log("Tails! Tails: " + tailsCount + ", Heads: " + headsCount);
    } else {
        headsCount++;
        console.log("Heads! Tails: " + tailsCount + ", Heads: " + headsCount);
    }
}

if (headsCount === 11) {
    console.log("Heads wins with 11 wins! Final Tails count: " + tailsCount);
} else {
    console.log("Tails wins with 11 wins! Final Heads count: " + headsCount);
}