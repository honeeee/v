'use strict';

// Array 🎉

// 1.Declaration
const arr1 = new Array();
const arr = [1,2];

//2. Index Position
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length -1);

console.clear();
// 3.Looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b.for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach
fruits.forEach(a => console.log(a));

// d.Addtion, deletion, copy
// push :  제일 뒤에 추가
fruits.push('🍓','🍑');
console.log(fruits);

// pop : 제일 뒤에 삭제
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: 제일 앞에 추가
fruits.unshift('🍋','🍏');
console.log(fruits);

// shift: 제일 앞에 삭제
fruits.shift();
console.log(fruits);

// note!! unshift, shift는 push, pop보다 훨씬 느리다
// -> 맨뒤는 빈공간에서 처리하는거지만 
// 맨앞은 기존데이터들을 처리해야해서 느리다.

// splice: 지정된 자리에서 삭제
fruits.push('🍓','🍑','🍉');
console.log(fruits);
fruits.splice(1, 1); //몇개를 지울건지 지정하지 않으면 지정한 인덱스부터 다 지워버림
console.log(fruits);
fruits.splice(1, 1,'🥑','🍒');// 지울갯수에 0을 넣으면 지우지 않고 데이터추가만을 할수도있다
console.log(fruits);

// 두가지 배열을 묶어서
const fruits2 = ['🍐','🌽'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍒'));//해당값이 몇번째인덱스에 있는지 2

//includes
console.log(fruits.includes('🥦'));//해당 값이 없으면 false

//lastIndexOf: last the index
console.clear();
console.log(fruits);
fruits.push('🍓');
console.log(fruits);
console.log(fruits.indexOf('🍓'));//제일 첫번째 해당하는 값의 인덱스 3
console.log(fruits.lastIndexOf('🍓'));//제일 마지막에 해당하는 인데스 출력


