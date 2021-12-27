// Promise 
// : js안에 내장된 object
// 비동기함수쓸때 함수대신 사용하는 object
// (1)State (2)producing<->consumer
// ->State: pending -> fulfilled or rejected


// 1. Producer
// promise는 만드는 순간 실행됨 -> 사용자가 요구할때만 해야한다면 이런식으로 작성하면 불필요하게 실행된다.
// 클래스임
const promise = new Promise((resolve, reject) => {
    // produce(좀 헤비한일들을 수행함 ex)네트워트통신, 파일읽기 )
    console.log('doing something..');       
    setTimeout(() => resolve('good'),2000);
});

// 만든 프로드서를 사용해보자
// 2. Consumer : then, catch, finally

