// function logText(text) {
//     console.log(text);
//     return text
// }

// logText();

//제네릭
//함수 호출 시점에 데이터 타입을 정의한다
function logText<T>(text: T):T {
    console.log(text);
    return text;
}

logText<string>('hello')
logText('하이')
logText(100)

