import { Color } from "../types";

const myColor = Color.Red;
console.log(myColor);

const yourColor = Color.Blue;
console.log(yourColor);

const chorok: Color = Color.Green;
console.log(chorok);

// const colorOfSky: Color.Blue = Color.Green;

console.log('-------')

const faveColor: Color = "Red" as Color;
console.log(faveColor);

const imposterColor: Color = "Potato" as Color;  // 막아야하는 상황
console.log(imposterColor);

