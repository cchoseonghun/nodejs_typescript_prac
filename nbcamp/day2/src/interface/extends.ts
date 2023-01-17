interface Person {
  name: string;
}

interface Developer extends Person {
  skill: string;
}

let fe = {} as Developer;

fe.name = 'josh';
fe.skill = 'TypeScript';

interface Person {
  name: string;
}

interface Drinker {
  drink: string;
}

interface Developer extends Person, Drinker {
  skill: string;
}

let fe2 = {} as Developer;
fe2.name = 'josh';
fe2.skill = 'TypeScript';
fe2.drink = 'Beer';