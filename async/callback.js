
// 자바스크립트는 동기적이다.(synchronous)
// 코드가 적힌 순서대로(= 동기적으로) 실핼된다
// hoisting : var, function declaration
// -> 변수나 함수선언들이 자동으로 맨위로 가서 실행이 된다.
console.log('1');
setTimeout(() =>  console.log('2'),1000);    // 브라우저API는 브라우저에게 요청 
console.log('3');       // 브라우저의 응답 기다리지 않고 바로 실행


// 1.동기콜백
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));


//2. 비동기콜백
function printWithDelay(print, timeout){
    setTimeout(print, timeout); // 21에서 전달받은 인자를 브라우저API에 넘겨줌
}
printWithDelay(() => console.log('async callback'),2000);
//js엔진이 함수가 모두 hoistng된다!

// 이렇게 콜백안에서 콜백,콜백,,콜백 => 콜백지옥..
// callback hell example
class UserStorage{
    loginUser(id, password, onSuccess, OnError){
        setTimeout(() => {
            if(
                (id === 'coffee' && password === 'americano') ||
                (id === 'beverage' && password === 'blacktea')
            ) {
                onSuccess(id);
            }else{
                OnError(new Error('not found'));
            }
        },2000);

    }

    getRoles(user, OnSuccess, OnError){
        setTimeout(() => {
            if(user === 'coffee'){
                OnSuccess({name: 'coffee', role:'admin'});
            }else{
                OnError(new Error('no access'));
            }
        },1000);

    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)

            },
            error => {
                console.log(error);
            }
        )
    },
    error => {console.log(error)});
// -> 가독성 떨어지고 코드이해하기 어렵다, 디버깅도 어렵다, 