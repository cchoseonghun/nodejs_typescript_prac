// Partial(파셜)은 특정 타입에 속해있는 집합을 모두 선택적으로 만드는 타입으로 변환

interface Toppings {
  tomatoes: boolean;
  onion: boolean;
  lettuce: boolean;
  ketchup: boolean;
}

const myTopprings: Toppings = {
  tomatoes: true, 
  onion: true, 
  lettuce: true, 
  ketchup: true, 
};

const partialToppingsIWant: Partial<Toppings> = {
  tomatoes: true, 
  onion: undefined, 
};

// console.log(partialToppingsIWant);

// Required는 Partial의 반대. 특정 타입에 속해있는 집합을 모두 필수로 변환

interface BubbleTeaOrder {
  tea: boolean;
  straw?: boolean;
}

const myBubbleTeaOrder: Required<BubbleTeaOrder> = {
  tea: true,
  straw: true,  // 필수로 변함. 안넣으면 에러
}

// Readonly는 한 타입의 집합을 읽기권한만 가능하게 변환해주는 타입

interface BankAccount {
  accountNumber: string;
  balance: bigint;
}

const myAccount: Readonly<BankAccount> = {
  accountNumber: "1234", 
  balance: BigInt(100000000), 
};

// myAccount.balance = BigInt(0);  // Error
// console.log(myAccount);

// Record 객체 타입을 설립하는데 쓰이는 유틸리티 타입

type Type = string[];
type TypeII = Array<string>;

type ObjectTypeRecord = Record<string, string>;
type ObjectTypeObject = { [key: string]: string }
// 위 두 타입은 동일

type Country = "Korea" | "USA" | "Canada" | "UK";
type CountryCode = 82 | 1 | 44;

type CountryToCountryCode = Record<Country, CountryCode>;
type CountryToCountryCodeObject = { [countryName in Country]: CountryCode }

const countries: CountryToCountryCodeObject = {
  Korea: 82,
  USA: 1, 
  Canada: 1,
  UK: 44,
}

// Omit<Type, keys>
// Omit은 특정 타입에 구성되어 있는 프로퍼티를 생략시킬 때 쓰는 타입

interface UserInfo {
  userName: string;
  favoriteColor: string;
  email: string;
  password: string;
}

// password, email을 생략한 새로운 타입을 만들고 싶을 때
type LessUserInfo = Omit<UserInfo, "password" | "email">

const newUser: LessUserInfo = {
  userName: "pony", 
  favoriteColor: "rainbow",
  // password: "1234",
  // email: "hello@world.hello", 
}

// Exclude<UnionType, ExcludedMembers>
// Exclude 타입은 유니온 타입에 속해있는 속성들을 생략할 때 사용

// Omit vs Exclude
// Omit: 객체 타입 안에 있는 프로퍼티 생략
// Exclude: 유니온 타입 안에 있는 속성들을 생략

type MyType = "dog" | "cat" | "alpaca";
// type LessMyType = Exclude<MyType, "cat" | "alpaca">;
type LessMyType = Exclude<MyType, "alpaca">;

// const catOrDogAllowed: LessMyType = "alpaca";  // Error
const catOrDogAllowed: LessMyType = "cat";

type onChange = (isDone: boolean) => boolean;
type GroupOfTypes = string | undefined | onChange;  
// GroupOfTypes만 import해서 쓰는 경우 onChange 타입을 사용하고 싶을 때
type FunctionType = Exclude<GroupOfTypes, string | undefined>;

const onChangeHandler: FunctionType = (isDone) => isDone;
// console.log(onChangeHandler(true));
// const today: FunctionType = "great day";  // Error


// Pick<Type, Keys>
// Pick 타입은 한 타입의 특정 프로퍼티들만 뽑아쓸 수 있도록 도와주는 타입

interface User {
  firstName: string;
  lastName: string;
}

interface Student {
  user: User;
  isGraduated: boolean;
  school: string;
}

type StudentName = Pick<Student, "user" | "isGraduated">;
const studentName: StudentName = {
  user: {
    firstName: "winnie",
    lastName: "pooh",
  },
  isGraduated: true
};

// console.log(studentName);


// Extract<Type, Union>

// Exclude는 union 타입에 있는 프로퍼티를 생략한다면
// Extract는 union 타입에 속한 프로퍼티를 뽑아낸다. 약간 반대 개념

type MyPet = "dog" | "cat" | "alpaca";
type ExtracteMyPet = Extract<MyPet, "alpaca" | "cat">;

const onlyAlpacaOrCatAllowed: ExtracteMyPet = "alpaca";


// NonNullable<Type>
// NonNullable 타입은 특정 타입에서 null 또는 undefined 타입을 생략해주는 타입

type QueryParam = string | string[] | undefined | null;
type NonNullableQueryParam = NonNullable<QueryParam>;

// const queryParam: NonNullableQueryParam = null;  // Error
const queryParam: NonNullableQueryParam = ["orders"];
// const forbiddenQueryParam: NonNullableQueryParam = undefined;  // Error



