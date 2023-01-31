// import { Color, Direction, IThingsInLife } from "../types";

// enums
import { Color, Direction } from '../types';
// interface
import type { IThingsInLife } from '../types';

function printRGB(color: Color): Color {
  return color;
}

console.log(printRGB(Color.Red));
console.log(printRGB(Color.Green));
// console.log(printRGB(Color.Purple));  // Error!

function printThingsInLife(things: IThingsInLife): string {
  return `color of pen: ${things.colorOfPen} keyboard arrow: ${things.keyboardArrow}`;
}

console.log(printThingsInLife({ colorOfPen: Color.Blue, keyboardArrow: Direction.Left }));