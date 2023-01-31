interface TableData { 
  [x: string]: string 
}

// type ObjectType = {
//   [key in Color]: string;  // objects.ts의 이 코드는 안됐는데 왜 위 코드는 될까?
// };
// 위의 key는 Color안의 Key를 in operator로 계산하는중인데
// x: string은 계산적인게 전혀 없기 때문에 쓸 수 있는 것!

const enum TableKey {
  ID = "ID", 
  FirstName = "firstName", 
  LastName = "lastName", 
  Score = "score", 
}

type StrictTableData = {
  [key in TableKey]: string
};

// const myTableData: TableData = {  // 아무 값이나 key로 들어오고 있다.
//   ID: "1", 
//   firstName: "jane", 
//   lastName: "doe", 
//   score: "100", 
//   age: "99", 
//   petName: "Hari", 
// }

const myTableData: StrictTableData = {  // 이렇게 쓰면 원하는 key값만 정해 쓸 수 있다.
  ID: "1", 
  firstName: "jane", 
  lastName: "doe", 
  score: "100", 
  // age: "99", 
  // petName: "Hari", 
}

type LessStrictTableData = {
  [key in TableKey]?: string
};

const myTableData2: LessStrictTableData = {
  ID: "1", 
  firstName: "jane", 
  lastName: "doe", 
  // score: "100",   // score값만 안쓰고 싶은 경우엔 에러 발생하지만 위의 key에 대해 ?를 붙여줌으로서 해결
}