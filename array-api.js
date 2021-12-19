// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const str = fruits.join();
  // ()여기에 구분자를 넣어서 string으로 만들어준다 optional
  console.log(str); // apple,banana,orange
}
// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const arr = fruits.split(',');
  // 구분자를 받아서 나눠줌(필수값)  [구분자,limit?] 
  console.log(arr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // const result = array.sort(a => -1);
  // console.log(result);

  const elly = array.reverse();// 거꾸로 해줌 -> 근데 원래것도 정렬을 해버리니 주의!
  console.log(elly);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // const arr2 = array.splice(0,2);// 삭제된 값이 반환된다!
  // 우리는 새로운 배열을 만들어야 하기 떄문에
  const arr1 = array.slice(2);//배열에서 원하는 부분만 리턴해준다
  const arr3 = array.slice(2,5);// 앨리버전
  console.log(arr1);
  console.log(array);//slice는 기존 배열은 건드리지 않음
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // students.forEach(a =>
  //   students.filter(b => b.score = 90)
  //   console.log(b.name);
  //   )
  //앨리버전
  const result = students.find((student) =>
     student.score == 90
  );
  console.log(result)
}

// Q6. make an array of enrolled students
{
  // const arr = students.find((student) =>
  //   student.enrolled == true
  // );
  // 앨리버전
  const arr = students.filter(s => s.enrolled);
  console.log(arr);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // const sco = students.forEach(a => a.score);
  // console.log(sco); 
  // 앨리버전
  // 콜백함수 인자는 최대한 헷갈리지 않게 만들기..!  a 말고 student로..!
  const result = students.map(a => a.score);
  console.log(result);
}
console.clear();
// Q8. check if there is a student with the score lower than 50
{
  // const result = students.find(student => student.score < 50);
  // console.log(result);
  // 앨리버전
  // some : 하나라도 조건이 있는지 없는지 true,false 반환
  const elly = students.some(a => a.score < 50);
  console.log(elly);

  // every : 모든 요소들이이 조건을 충족해야 true,false 반환
  const elly2 = !students. every(a => a.score >= 50);
  console.log(elly2);
}

// Q9. compute students' average score
{
  // reduce : 배열을 돌면서 무언가 값을 누적할때 ! 리턴은 누적된 값을 전달한다.
  // reduceRight : 리턴은 누적된 값을 전달한다.
  const avg = students.reduce((pre, cur) => {
    return pre + cur.score;//리턴을 해줘야 다음호출될때 pre에 연결이 됨

  },0);
  // 한줄로 -> const avg = students.reduce((pre, cur) => pre + cur.score,0);
  console.log(avg); //이거는 합계
  console.log(avg / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // const str = students.join(a => a.score,',');
  // console.log(str);

  // 앨리버전
  const result = students
    .map(a => a.score)
    .filter(b => b > 50)// 이것도 미쳤다.
    .join();//미쳣다.

  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const sort = students.map(student => student.score).sort().join();
  const sort22 = students
  .map(student => student.score)
  .sort((a, b) => b - a)
  .join();
  console.log(sort22);
}
