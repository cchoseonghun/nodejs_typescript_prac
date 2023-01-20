// function sum(a, b) {  // tsconfig의 "noImplicitAny": true 값으로 인해 오류로 바뀜
// function sum(a: any, b: any) {  // but, 명시적으로 주는건 막을 수 없다.

// function sum(a: number, b: number): number {
function sum(a: number, b: number) {  // 타입 추론으로 알아서 리턴 number인걸 캐치하는 모습
  return a + b;
}