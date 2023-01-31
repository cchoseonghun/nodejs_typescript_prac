// types
import type { User, Order } from '../types/index';
// enums
import { Status } from '../types/index';

function getData<T>(data: T): T {
  return data;
}

// console.log(getData('string data'));  // 추론하게 하면 literal 타입이 되버림
console.log(getData<string>('string data'));
console.log(getData<number>(1234));
console.log(getData<User>({email: 'email@gmail.com', name: 'katie'}));
console.log(getData<string[]>(['a', 'b']));
console.log(getData<string[]>([]));  // 빈 배열도 유효하다.




// const orders: Order[] = Object.keys(Status).map((status, index) => {
// const orders: Order[] = Object.values(Status).map((status, index) => {
const orders: Order[] = Object.values<Status>(Status).map((status, index) => {  
  // values<>에 직접 타입 써줄수도 있음
  return {
    buyer: `buyer #${index}`, 
    orderStatus: status, 
  }
})
// * keys(o: object): string[];
// keys를 쓸 때는 string[]을 반환함. 중요!

// * values<T>(o: { [s: string]: T } | ArrayLike<T>): T[];
// values는 제네릭을 쓰기 때문에 괜찮

console.log(orders);

// entries를 쓸 경우
const orders2: Order[] = Object.entries(Status).map((status, index) => {  
  // values<>에 직접 타입 써줄수도 있음
  return {
    buyer: `buyer #${index}`, 
    orderStatus: status[1], 
  }
})

console.log(orders2);