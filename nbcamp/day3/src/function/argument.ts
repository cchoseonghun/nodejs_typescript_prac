function sum2(a: number, b: number): number {
  return a + b;
  
}
sum2(10, 20); // 30
// sum(10, 20, 30); // error, too many parameters
// sum(10); // error, too few parameters



function sum3(a: number, b?: number): number {
  return a + b;
  
}
sum3(10, 20); // 30
// sum(10, 20, 30); // error, too many parameters
sum3(10); // error, too few parameters

// "strictNullChecks": true, 라 에러나는중 false면 에러 안남


// 연습하는데 자꾸 함수명 중복되서 귀찮으면 아래 코드로 해결 가능
// export { sum }
