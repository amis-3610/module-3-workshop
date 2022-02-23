let scores: number[] = [85, 92, 88, 96, 100];

let highScores: number[];
let evenScores: number[];

highScores = scores.filter((x) => x > 95);
evenScores = scores.filter((x) => x % 2 === 0);

console.log(highScores);
console.log(evenScores);