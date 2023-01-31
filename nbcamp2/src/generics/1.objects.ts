import type { MyInterface, MyInterfaceG } from '../types';

// const error: readonly Array<boolean> = [false]; // Error 같이 쓸 수 없는 관계
// const okay: readonly boolean[] = [true];  // 가능
// const okayGeneric: ReadonlyArray<boolean> = [false];  // 가능

const stringObject: MyInterface = { value: "hello world!" };
const numberObject: MyInterface = { value: 1234 };
const stringArrayObject: MyInterface = { value: ["hello", "world"] };

const stringObjectG: MyInterfaceG<string> = { value: "hello world" };
const numberObjectG: MyInterfaceG<number> = { value: 1234 };
const stringArrayObjectG: MyInterfaceG<string[]> = { value: ["hello", "world"] };
