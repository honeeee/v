'use strict';

// Array π

// 1.Declaration
const arr1 = new Array();
const arr = [1,2];

//2. Index Position
const fruits = ['π','π'];
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
// push :  μ μΌ λ€μ μΆκ°
fruits.push('π','π');
console.log(fruits);

// pop : μ μΌ λ€μ μ­μ 
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: μ μΌ μμ μΆκ°
fruits.unshift('π','π');
console.log(fruits);

// shift: μ μΌ μμ μ­μ 
fruits.shift();
console.log(fruits);

// note!! unshift, shiftλ push, popλ³΄λ€ ν¨μ¬ λλ¦¬λ€
// -> λ§¨λ€λ λΉκ³΅κ°μμ μ²λ¦¬νλκ±°μ§λ§ 
// λ§¨μμ κΈ°μ‘΄λ°μ΄ν°λ€μ μ²λ¦¬ν΄μΌν΄μ λλ¦¬λ€.

// splice: μ§μ λ μλ¦¬μμ μ­μ 
fruits.push('π','π','π');
console.log(fruits);
fruits.splice(1, 1); //λͺκ°λ₯Ό μ§μΈκ±΄μ§ μ§μ νμ§ μμΌλ©΄ μ§μ ν μΈλ±μ€λΆν° λ€ μ§μλ²λ¦Ό
console.log(fruits);
fruits.splice(1, 1,'π₯','π');// μ§μΈκ°―μμ 0μ λ£μΌλ©΄ μ§μ°μ§ μκ³  λ°μ΄ν°μΆκ°λ§μ ν μλμλ€
console.log(fruits);

// λκ°μ§ λ°°μ΄μ λ¬Άμ΄μ
const fruits2 = ['π','π½'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π'));//ν΄λΉκ°μ΄ λͺλ²μ§ΈμΈλ±μ€μ μλμ§ 2

//includes
console.log(fruits.includes('π₯¦'));//ν΄λΉ κ°μ΄ μμΌλ©΄ false

//lastIndexOf: last the index
console.clear();
console.log(fruits);
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));//μ μΌ μ²«λ²μ§Έ ν΄λΉνλ κ°μ μΈλ±μ€ 3
console.log(fruits.lastIndexOf('π'));//μ μΌ λ§μ§λ§μ ν΄λΉνλ μΈλ°μ€ μΆλ ₯


