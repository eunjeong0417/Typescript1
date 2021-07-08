function sum(a:number , b:number):number {
    return a + b;
}

sum(3,5);

const str = "hello";
const a:string = "hello";
//문자열 타입 선언

//숫자 배열
let arr:Array<number> = [1,2,3]

let items:number[] = [1,2,3]

//items도 arr과 같은 숫자 배열. 동일함

//문자 배열
let heroes:Array<string> = ["apple","mango", "orange"]
//숫자만 들어갈 수 있는 배열


//타입스크립트 튜플
// 튜플은 배열의 인덱스의 타입을 정의할때 사용
let address: [string, number] = ["hello", 10];


//객체

let obj:{name: string, age:number} = {
    name : "lyne", 
    age: 100
}

//진위값

let hello: boolean = true;

//매개변수의 타입 정의
// function add ( a:number, b:number) {
//     return a + b;
// }
// add(1,7);

//함수의 반환값의 타입 정의
function add1():number {
    return 15;
}


//함수의 타입을 정의하는 기본적인 방식
// 매개변수와 반환값의 타입을 number로 지정
function add ( a:number, b:number):number {
    return a + b;
}
add(1,7);


//함수의 타입을 정의하는 방식2
//함수타입 - 옵셔널 파라미터
//파라미터의 타입을 정의할 때 물음표를 넣어주면
//선택적인 조건이 된다
// function log( a:string, b?:string) {
    
// }

// log("hello")
// log("hello2", "ts")



// function logMessage(value: any) {
//     console.log(value);


// logMessage("hello");
// logMessage(100);
// logMessage(false);

//Union Type
//파라미터나 변수에 하나 이상의 데이터 타입을 사용할 수 있다
//타입가드: 특정 타입으로 타입의 번위를 좁혀 나가는 과정
// function logMessage(value: string | number) {
//     if (typeof value === "number") {
//         value.toFixed();
//     }
//     if (typeof value === "string") {
//         value.
//     }
// }

// logMessage("hello")
// logMessage(100)


// //seho라는 변수의 데이터 타입을 string, number, boolean 으로 설정
// let seho: string | number | boolean;

// interface Developer {
//     name: string;
//     skill: string
// }

// interface Person {
//     name: string;
//     age: number
// }

// //공통된 속성인 name 값만 사용할 수 있다(유니온타입의 특징)
// function askSomeone(someone:Developer | Person) {
//     someone.
// }

// let capt: string & number & boolean;

interface Developer {
    name: string;
    skill: string
}

interface Person {
    name: string;
    age: number
}

//유니온타입 |
// function askSomeone(someone: Developer | Person) {
    
// }
// askSomeone({ name:"seho", skill: "cook" }) //Developer 타입
// askSomeone({ name:"eunjeong", age: 20}) //Person 타입

//인터섹션타입 &
function askSomeone(someone: Developer & Person) {
    
}
askSomeone({ name:"seho", skill: "cook", age:20 })