function greet(name: string, age: number): string {
  return `안녕 난 ${name}, ${age}살이야`;
}

let greetFn: (name: string, age: number) => string;
greetFn = greet;

console.log(greetFn("정우", 25));
