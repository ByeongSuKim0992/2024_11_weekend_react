// 데이터 타입
// 기본: string, boolean, number, null, undefined
// 참조: arr, obj, ...

const student = { name: "alice", age: 24 };
student.gender = "female";
const newObj = { ...student };

const lotto = [3, 7, 12, 23, 34, 42];
lotto.push(45);
const newArr = [...lotto, 100];

// 리액트 불변성

// 리액트에서 useState재랜더링[다시 그려주기]이 발생하는 조건
// 메모리의 참조값이 변경되면 재랜더링이 일어남
