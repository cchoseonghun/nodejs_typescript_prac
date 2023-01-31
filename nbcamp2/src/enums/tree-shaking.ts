// tree-shaking
// 사용하지 않는 코드를 제거하는 기능
// but, enum은 ts의 기능이라 tree-shaking이 되지 않는다.

// enum Color {  // 이렇게 그냥 선언하면 쓰지도 않는데 트랜스파일 시 js코드가 생성된다.
//   Red = "Red", 
//   Green = "Green", 
//   Blue = "Blue", 
// }

const enum Color {
  Red = "Red", 
  Green = "Green", 
  Blue = "Blue", 
}

const green = Color.Green;

// 트랜스파일 시 아래 코드로 깔끔하게 나온다.

// Object.defineProperty(exports, "__esModule", { value: true });
// const green = "Green" /* Color.Green */;