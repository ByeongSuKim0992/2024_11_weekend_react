//destructruing
const students = { name: "김은희", age: 22, major: "일본어" };
const { name } = students;
const { age } = students;

const coffee = { name: "아메리카노", price: 2500, shot: 3 };
const { shot } = coffee;

const bread = { breadName: "소금빵", price: 3000, kcal: 350 };
const { breadName, ...rest } = bread; // rest {price: 3000, kcal: 350}

const drink = { drinkName: "코카콜라", price: 1500, kcal: 200 };
const { drinkName, ...rest1 } = drink;
const test = { ...bread, ...drink };

const pizza = { pizzaName: "페페로니", price: 25000 };
const pizza1 = { pizzaName1: "슈프림", price: 23000 };

//객체 병합
const combo = { ...pizza, ...pizza1 };
