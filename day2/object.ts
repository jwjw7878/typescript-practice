interface Person {
  name: string;
  age: number;
  isActive?: boolean; //? 선택적 프로퍼티
}

let person1: Person = {
  name: "철수",
  age: 22,
};

let person2: Person = {
  name: "영철",
  age: 23,
  isActive: false,
};

console.log(person1, person2);
