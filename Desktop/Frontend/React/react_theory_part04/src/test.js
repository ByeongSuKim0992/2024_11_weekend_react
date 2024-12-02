// const coffee = { name: "아메리카노", price: 2500, shots: 3 };
// const coffee1 = { name1: "라떼", price1: 3000, shots1: 4 };

// const price =coffee.price;
// const { price, shots } = coffee;
// const newCoffee = { ...coffee, ...coffee1 };

// const fruits = ["apple", "banana", "pineapple", "mango", "kiwi"];

// const [a, b, c] = fruits; // apple, banana, pineapple
// const [a1] = fruits; // apple

// const test = () => {
//   return ["국어", "영어", "수학", "사회", "과학"];
// };

// const [a2, b2, c2] = test(); // 국영수

//Quiz1
const menu = [
  { name: "커피", price: 2500 },
  { name: "도너츠", price: 3000 },
  { name: "타르트", price: 3500 },
];

// -> {id:1, name: "커피", price: 2500 }
// -> {id:2, name: "커피", price: 2500 }
// -> {id:3, name: "커피", price: 2500 }

// 지양
menu.map((v, i) => {
  v.id = i + 1;
  return v;
});

//지향
menu.map((v, i) => {
  return { ...v, id: i + 1 };
});

// Quiz 2
const starbucks = [
  { name: "americano", shots: 2, price: 4000 },
  { name: "latte", shots: 2, price: 5000 },
  { name: "mint", shots: 0, price: 5500 },
];

// 각각에 no:0 ~ 2 추가해주기
// shots 하나씩 늘려주고, 가격은 1000원을 더해서
// 새로운 리스트 만들기!

starbucks.map((v, i) => {
  return { ...v, no: i, shots: v.shots + 1, price: v.price + 1000 };
});
