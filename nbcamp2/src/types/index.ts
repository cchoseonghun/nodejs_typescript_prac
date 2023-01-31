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

export interface MyInterface {
  value: string | number | string[];
}

export interface MyInterfaceG<T> {
// interface MyInterfaceG<T = string> {  // 이런식으로 기초값을 부여할 수 있다.
  value: T;
}

export type User = {
  email: string;
  name: string;
}

export enum Status {
  Initiated = "Initiated", 
  Pending = "Pending", 
  Shipped = "Shipped", 
  Delivered = "Delivered", 
}

export interface Order {
  buyer: string;
  orderStatus: Status;
}