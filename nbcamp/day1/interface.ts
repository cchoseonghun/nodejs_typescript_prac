interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

// function updateUser(id: number, update: Partial<User>) {
//   const user = getUser(id)
//   const newUser = { ...user, ...update }
//   saveUser(id, newUser)
// }

interface Person {
  age: number;
  name: string;
}

const me: Person = { 
  age: 10, 
  name: "young"
 };