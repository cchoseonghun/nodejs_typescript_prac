// union 타입은 조합이 가능하지만
// 교차 타입은 결합하여 사용

type Common = {
  name: string,
  age: number,
  gender: string
}

type Animal = {
  howl: string
}

type Cat = Common & Animal;
type Dog = Common | Animal;

let dog: Dog = {
  howl: 'dogggg'
}
let cat: Cat = {
  age: 3,
  gender: 'C',
  name: 'CC',
  howl: 'cattttt'
}