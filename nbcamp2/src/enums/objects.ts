import { Color } from "../types";


const keys = Object.keys(Color); 
console.log(keys);  // [ 'Red', 'Green', 'Blue' ], 타입은 string[]

console.log('-------');

const values = Object.values(Color);
console.log(values);  // [ 'Red', 'Green', 'Blue' ] keys와 같지만 타입은 Color[]로 다르다.

// type ObjectType = {
//   [key in Color]: string;  // enum을 key로 쓰려면 interface를 쓸 수 없고 type을 써야한다.
// };

// const myObject: ObjectType = {};  // Error!

type ObjectType = {
  [key in Color]?: string;  // 
};

const myObject: ObjectType = {};  // 위에서 필수 key값에 ?을 붙여주는 방식으로 해결

keys.forEach((key) => {
  // myObject[key] = "hello";  // Error
  // myObject[key as Color] = "hello";  // Error가 아니지만 asType은 안쓰는게 좋다.
})

values.forEach((key) => {
  myObject[key] = "hello";
})

console.log(myObject);

console.log('-------');

const keyValues = Object.entries(Color);
console.log(keyValues);  // [ [ 'Red', 'Red' ], [ 'Green', 'Green' ], [ 'Blue', 'Blue' ] ]


 // keys는 string[]을 반환하지만 
 // values는 values<T>로 T를 반환한다.