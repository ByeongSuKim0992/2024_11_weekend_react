// const coffee = { name: "아메리카노", price: 2500, shots: 3 };
// const coffee1 = { name1: "라떼", price1: 3000, shots1: 4 };

// const price =coffee.price;
// const { price, shots } = coffee;
// const newCoffee = { ...coffee, ...coffee1 };

const fruits = ["apple", "banana", "pineapple", "mango", "kiwi"];

const [a, b, c] = fruits; // apple, banana, pineapple
const [a1] = fruits; // apple

const test = () => {
  return ["국어", "영어", "수학", "사회", "과학"];
};

const [a2, b2, c2] = test(); // 국영수
