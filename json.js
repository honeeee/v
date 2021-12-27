// JSON
// JavaScript Object Notation
// es3에서 영감을 받고 만들어진 데이터 포맷
// {key : vlaue}
// 데이터를 주고 받는 포맷
// 오브젝트를 어떻게 json으로?
// json을 어떻게 오브젝트로?

// 1. object -> json(string)
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name","color"]);// 원하는 값만 할 수 도있음
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // return value;

  //만약 key가 name이면 value를 'hee'로 하고 아니면 기존 value를 쓴다
  return key === 'name' ? 'hee' : value; 
  
});
console.log(json);

// 2. json -> object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
// const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value) =>{
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date() : value;
});
console.log(obj); 
rabbit.jump();//  can jump!
// obj.jump(); 
// obj -> json으로 변환할때는 함수는 변환이 안된다 
// 그래서 다시 json -> obj로 변환하면 obj에는 함수가 없다! 유의하기

console.log(rabbit.birthDate.getDate()); //12
// console.log(obj.birthDate.getDate()); -> 에러(함수만들기전)
// console.log(obj.birthDate);//2021-12-12T09:21:26.490Z
console.log(obj.birthDate.getDate());//함수 만든후 에러x