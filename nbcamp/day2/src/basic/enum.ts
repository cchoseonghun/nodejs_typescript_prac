enum Color {Red, Green, Blue}  // 초기값이 없을 시 0부터 1씩 올라감
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);

let a: Color = Color.Red;
let b: Color = Color.Green;
let c: Color = Color.Blue;

console.log(a)  // 0
console.log(b)  // 1
console.log(c)  // 2

// enum Color {Red = 1, Green, Blue}  // 1부터 올라감
// let c: Color = Color.Green;

// console.log(c)  // 2

// enum Color {Red = 1, Green = 2, Blue = 4}  // 모든 값을 수동으로 세팅할수도 있음
// let c: Color = Color.Green;

// console.log(c)

// 리버스 매핑
// enum Color {Red = 1, Green, Blue}
// let colorName: string = Color[2];

// console.log(colorName); // 값이 2인 'Green'이 출력됩니다.