interface Person {
  name: string;
  age: number;
  email?: string;
}

type P = Person;

const person: P = {
  name: "李四",
  age: 18,
};

console.log(`我叫${person.name},我今年${person.age}岁了`);
