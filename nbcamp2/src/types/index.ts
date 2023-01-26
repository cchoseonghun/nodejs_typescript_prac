export enum Color {
  Red = "Red", 
  Green = "Green", 
  Blue = "Blue"
}

export enum Direction {
  Up = "Up", 
  Down = "Down", 
  Left = "Left", 
  Right = "Right", 
}

// type TThingsInLife = {
//   colorOfPen: Color;
//   keyboardArrow: Direction;
// }

export interface IThingsInLife {
  colorOfPen: Color;
  keyboardArrow: Direction;
}